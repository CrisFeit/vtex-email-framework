# VTEX Email Framework
### Development environment setup for VTEX transactional emails
 [![Badge](https://img.shields.io/github/package-json/v/crisfeit/vtex-email-framework)](https://github.com/CrisFeit/vtex-email-framework/releases) [![Badge](https://img.shields.io/github/issues/CrisFeit/vtex-email-framework)](https://github.com/CrisFeit/vtex-email-framework/issues) [![dependencies Status](https://status.david-dm.org/gh/CrisFeit/vtex-email-framework.svg)](https://github.com/CrisFeit/vtex-email-framework/blob/master/package.json)
##  Features
* Sass
* Hot Reload
* Partial Files
* Dashboard
* Boilerplate
* Inline styles
* HTML Attributes
## Requirements
[![Badge](https://img.shields.io/badge/%20yarn->=_1-blue?logo=yarn)](https://classic.yarnpkg.com)   
[![Badge](https://img.shields.io/badge/%20node.js-%20%3E%3D_14-brightgreen?logo=node.js)](https://nodejs.org)
## Guide
* Data and template file name must be the same
```
emails
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
- Install
```bash
yarn install
```
- Development
```bash
yarn dev
```
- Production
```bash
yarn build
```
## References
[Handlebars](https://handlebarsjs.com/)  

[Can I Email](https://www.caniemail.com/)

[Emails Support](https://www.campaignmonitor.com/css/)  

[Vtex Templates](https://help.vtex.com/tutorial/list-of-e-mail-templates-in-the-message-center--3g2S2kqBOoSGcCaqMYK2my)  

[Vtex Message Center](https://help.vtex.com/en/tracks/transactional-emails--6IkJwttMw5T84mlY9RifRP/5uvq01BDu6nnDEJpseR1aH)

