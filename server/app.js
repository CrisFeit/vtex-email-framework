
const { existsSync, readdirSync } = require('fs');
const { resolve } = require('path');
const cors = require('cors')
const app = require('express')();
const hbs = require('hbs');

const root = (folders)=> {
    return resolve(process.cwd(), ...folders.split('/'));
}

require(resolve(__dirname, 'vtex-helpers-v3.2.2'));
hbs.registerHelper('clearText', (value) => value.replace(/\W+/g, ' '));
hbs.registerPartials(root('emails/templates/partials'), function (err) { });

function findModel(templateName) {
    if (existsSync(root('emails/templates/defaults'))) {
        if (readdirSync(root('emails/templates/defaults')).includes(templateName)) return templateName
    }
    return null
}

const viewFiles = readdirSync(root('emails/templates'));
const fileNames = viewFiles
    .filter(folder => /.hbs$/gi.test(folder))
    .map(template => {
        return {
            file: template.split('.')[0],
            model: findModel(template)
        }
    });

app.use(cors());
app.set('views', root('emails/templates'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render(resolve(__dirname, 'view'), { files: fileNames })
});

fileNames.forEach(({ file }) => {
    app.get(`/${file}`, (req, res) => {
        res.render(file, require(root(`emails/json/${file}.json`)))
    })
    app.get(`/templates/defaults/${file}`, (req, res) => {
        res.render(root(`emails/templates/defaults/${file}`), require(root(`emails/json/${file}.json`)))
    })
});

module.exports = app