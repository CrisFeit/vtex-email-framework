# Email Factory
 ### Development environment for transactional emails

##  Features
### Development
* Sass
* Hot Reload
* Dashboard
* Boilerplates
* Data Binding
* Template Engine
### Production
* Minify css
* Autoprefixer
* Inject inline css
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