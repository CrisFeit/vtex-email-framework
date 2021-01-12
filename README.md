# <p style="text-align: center;"> Vtex Email Framework </p>
 ### Development environment setup for vtex transactional emails

##  Features
### Development
* Sass
* Hot Reload
* Boilerplate
* Dashboard
* Template Engine
### Production
* PostCss
* Minify css
* Autoprefixer
* Inline styles
* Embedded styles
## Requirements
* Node.js >=14
## Install
```bash
  npm | yarn install
```
## Guide
* File names must be the same
```
app
│
└───data
│   │   order-confirmation.json
│   │   payment-aproved.json
└───templates
    │   order-confirmation.hbs
    │   payment-aproved.hbs
```
## Comand
- Development
```bash
npm | yarn dev
```
- Production
```bash
npm | yarn build
```