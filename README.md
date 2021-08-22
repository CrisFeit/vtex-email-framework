# VTEX Email Framework

 [![Badge](https://img.shields.io/github/package-json/v/crisfeit/vtex-email-framework)](https://github.com/CrisFeit/vtex-email-framework/releases) [![Badge](https://img.shields.io/badge/%20yarn->=_1-blue?logo=yarn)](https://classic.yarnpkg.com) [![Badge](https://img.shields.io/badge/%20node.js-%20%3E%3D_14-brightgreen?logo=node.js)](https://nodejs.org) [![dependencies Status](https://status.david-dm.org/gh/CrisFeit/vtex-email-framework.svg)](https://github.com/CrisFeit/vtex-email-framework/blob/master/package.json)

## Transactional emails development architecture

### [:mailbox: Homepage](https://github.com/crisfeit/vtex-email-framework)

### :crossed_swords: Features

* Sass
* Hot Reload
* Partial Files
* Inline CSS
* Dashboard
* Boilerplate
* Template Engine

### :world_map: Guide

* Data and template file name must be the same

```bash
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

* Partials

:white_check_mark: Right

```html
<Shelf class="partial">{{> Shelf}}</Shelf>
```

:x: Wrong

```html
<Shelf class="partial">
    {{> Shelf}}
</Shelf>
```

### :video_game: Commands

* Install

```bash
yarn install
```

* Development

```bash
yarn dev
```

* Production

```bash
yarn build
```

* Test

```bash
yarn test
```

### :books: References

[BEM](https://www.integralist.co.uk/posts/bem)

[Sass](https://sass-lang.com/guide)

[Handlebars](https://handlebarsjs.com/)  

[Can I Email](https://www.caniemail.com/)

[Emails Support](https://www.campaignmonitor.com/css/)  

[Vtex Templates](https://help.vtex.com/tutorial/list-of-e-mail-templates-in-the-message-center--3g2S2kqBOoSGcCaqMYK2my)  

[Vtex Message Center](https://help.vtex.com/en/tracks/transactional-emails--6IkJwttMw5T84mlY9RifRP/5uvq01BDu6nnDEJpseR1aH)
