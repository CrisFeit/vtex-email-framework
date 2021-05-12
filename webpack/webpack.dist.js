const fs = require('fs')
const { resolve } = require('path')
const juice = require('juice')

const options = {
  extraCss: '',
  insertPreservedExtraCss: true,
  applyStyleTags: true,
  removeStyleTags: false,
  preserveMediaQueries: true,
  preserveFontFaces: true,
  applyWidthAttributes: true,
  applyHeightAttributes: true,
  applyAttributesTableElements: true,
  url: ''
}

function dist(fileName) {
  return resolve('app','dist', fileName)
}

if (fs.existsSync(resolve('app', 'dist'))) {
  
  try {
    let js = dist('main.js')
    if(fs.existsSync(js)){
      fs.unlinkSync(js, (err) => {
        if (err) {
          console.error(err)
          return
        }
      })
    }

  fs.readdirSync(resolve('app','dist')).forEach(file => {
    const templateFile = fs.readFileSync(dist(file),'utf8')        
    fs.writeFileSync(dist(file),juice(templateFile,options))
  })
  
  } catch (error) {
      console.log(error)
  }
}