const fs = require('fs')
const { resolve } = require('path')
const juice = require('juice')

const options = {
    extraCss: '',
    insertPreservedExtraCss: true,
    applyStyleTags: true,
    removeStyleTags: true,
    preserveMediaQueries: true,
    preserveFontFaces: true,
    applyWidthAttributes: true,
    applyHeightAttributes: true,
    applyAttributesTableElements: true,
    url: ''
}

function dist(fileName) {
    return resolve(process.cwd(), 'emails', 'dist', fileName)
}

function cleanDist() {
    let js = dist('main.js')
    if (fs.existsSync(js)) {
        fs.unlink(js, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
    }
}

function styledTags() {
    fs.readdirSync(resolve(process.cwd(), 'emails', 'dist')).forEach(file => {
        const templateFile = fs.readFileSync(dist(file), 'utf8')
        fs.writeFileSync(dist(file), juice(templateFile, options))
    })
}

if (fs.existsSync(resolve(process.cwd(), 'emails', 'dist'))) {
    cleanDist()
    styledTags()
}