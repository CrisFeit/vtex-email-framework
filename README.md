# VTEX Email Framework
### Development environment setup for VTEX transactional emails
![Badge](https://img.shields.io/github/license/CrisFeit/vtex-email-framework) ![Badge](https://img.shields.io/github/package-json/v/crisfeit/vtex-email-framework) ![Badge](https://img.shields.io/github/issues/CrisFeit/vtex-email-framework) ![Badge](https://david-dm.org/crisfeit/vtex-email-framework.svg)
##  Features
### Development
* Sass
* Hot Reload
* Partial Files
* Dashboard
* Boilerplate
* Syntax Highlight
* Template Engine
### Production
* Minify css
* Autoprefixer
* Inline styles
* HTML Attributes
* Embedded styles
## Requirements
![Badge](https://img.shields.io/badge/%20node.js-%20%3E%3D_14-brightgreen?logo=node.js)
## Install
```bash
  npm run install | yarn install
```
## Guide
* Data and template file name must be the same
```
app
│
└───json
│   │   order-confirmation.json
│   │   payment-aproved.json
└───templates
    │   order-confirmation.hbs
    │   payment-aproved.hbs
    └───partials
        │   Header.hbs
        │   Shelf.hbs
```
* Partials
```html
<Shelf class="partial">{{> Shelf}}</Shelf>
```
## Comand
- Development
```bash
npm run dev | yarn dev
```
- Production
```bash
npm run build | yarn build
```
## References
[Handlebars](https://handlebarsjs.com/)  

[Emails Support](https://www.campaignmonitor.com/css/)  

[Vtex Templates](https://help.vtex.com/tutorial/list-of-e-mail-templates-in-the-message-center--3g2S2kqBOoSGcCaqMYK2my)  

[Vtex Message Center](https://help.vtex.com/en/tracks/transactional-emails--6IkJwttMw5T84mlY9RifRP/5uvq01BDu6nnDEJpseR1aH)

