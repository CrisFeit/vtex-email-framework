
const { existsSync, readdirSync } = require('fs');
const { resolve } = require('path');
const hbs = require('hbs');
const cors = require('cors')
const express = require('express');
const app = express();
const { Router } = require('express');
const router = new Router();
const { Server } = require('ws');

function root(folders){
    return resolve(...folders.split('/'));
}

function findModel(templateName){
    if (existsSync(root( 'emails/templates/defaults'))) {
        if(readdirSync(root('emails/templates/defaults')).includes(templateName)) return templateName
    }
    return null
}

const viewFiles = readdirSync(root('emails/templates'));
const fileNames = viewFiles
    .filter(folder => /.hbs$/gi.test(folder))
    .map(template=> {
        return {
            file : template.split('.')[0],
            model: findModel(template)
        }
});

require(root('emails/helpers/vtex-helpers-v3.2.2'));
hbs.registerHelper('clearText', (value)=> value.replace(/\W+/g,' '));
hbs.registerPartials(root('emails/templates/partials'), function (err) {});

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));
app.set('views',root('emails/templates'));
app.set('view engine','hbs');
app.use(router);

app.get('/' , (req,res)=> {
    res.render(root('webpack/src/view'),{files:fileNames})
});

fileNames.forEach(({file}) => {
    app.get(`/${file}` , (req,res)=> {
        res.render(file,require(root(`emails/json/${file}.json`)))
    })
    app.get(`/templates/defaults/${file}` , (req,res)=> {
        res.render(root(`emails/templates/defaults/${file}`),require(root(`emails/json/${file}.json`)))
    })
});

app.listen( 5050 , ()=> new Server({ port: 8090}));