# VTEX Email Framework

[![Badge](https://img.shields.io/github/package-json/v/crisfeit/vtex-email-framework?color=%23F05032&logo=git)](https://github.com/CrisFeit/vtex-email-framework) ![Badge](https://img.shields.io/npm/dt/vtex-email-framework?color=%23CB3837&logo=npm) [![Badge](https://img.shields.io/badge/%20yarn->=_1-blue?logo=yarn)](https://classic.yarnpkg.com) [![Badge](https://img.shields.io/badge/%20node.js-%20%3E%3D_14-brightgreen?logo=node.js)](https://nodejs.org)

## Transactional emails development architecture

### Installation

`npx create-vtex-email my-store-emails`

### Features

* Sass
* Hot Reload
* Partial Files
* Inline CSS
* Dashboard
* Boilerplate
* Email Stylelint
* Template Engine

### Guide

* Data and template file name must be the same

```javascript
emails
│
└───json
│   │   order-confirmation.json
│   │   payment-approved.json
└───templates
    │   order-confirmation.hbs
    │   payment-approved.hbs
    └───partials
        │   Header.hbs
        │   Shelf.hbs
```

* Partials import

```html
<Shelf class="partial">{{> Shelf}}</Shelf>
```

### Commands

* Development

```bash
yarn dev
```

* Production

```bash
yarn build
```

### References

[BEM](https://www.integralist.co.uk/posts/bem)

[Sass](https://sass-lang.com/guide)

[Handlebars](https://handlebarsjs.com/)  

[Can I Email](https://www.caniemail.com/)

[Emails Support](https://www.campaignmonitor.com/css/)  

[Vtex Templates](https://help.vtex.com/tutorial/list-of-e-mail-templates-in-the-message-center--3g2S2kqBOoSGcCaqMYK2my)  

[Vtex Message Center](https://help.vtex.com/en/tracks/transactional-emails--6IkJwttMw5T84mlY9RifRP/5uvq01BDu6nnDEJpseR1aH)
