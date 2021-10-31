# VTEX Email Framework

 [![Badge](https://img.shields.io/npm/v/vtex-email-framework?color=%23CB3837&label=package&logo=npm)](https://github.com/CrisFeit/vtex-email-framework) [![Badge](https://img.shields.io/badge/%20yarn->=_1-blue?logo=yarn)](https://classic.yarnpkg.com) [![Badge](https://img.shields.io/badge/%20node.js-%20%3E%3D_14-brightgreen?logo=node.js)](https://nodejs.org)

## Transactional emails development architecture

### :gear: Install

```bash
npx create-vtex-email my-emails
```

### :crossed_swords: Features

* Sass
* Hot Reload
* Partial Files
* Inline CSS
* Dashboard
* Boilerplate
* Email Stylelint
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

* Development

```bash
yarn dev
```

* Production

```bash
yarn build
```

### :books: References

[BEM](https://www.integralist.co.uk/posts/bem)

[Sass](https://sass-lang.com/guide)

[Handlebars](https://handlebarsjs.com/)  

[Can I Email](https://www.caniemail.com/)

[Emails Support](https://www.campaignmonitor.com/css/)  

[Vtex Templates](https://help.vtex.com/tutorial/list-of-e-mail-templates-in-the-message-center--3g2S2kqBOoSGcCaqMYK2my)  

[Vtex Message Center](https://help.vtex.com/en/tracks/transactional-emails--6IkJwttMw5T84mlY9RifRP/5uvq01BDu6nnDEJpseR1aH)
