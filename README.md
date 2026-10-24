# VTEX Email Framework

[![Badge](https://img.shields.io/badge/%20VTEX-%3D?logo=vtex&color=ED125F&label=emails&logoColor=ED125F)](https://help.vtex.com/tutorial/list-of-e-mail-templates-in-the-message-center--3g2S2kqBOoSGcCaqMYK2my) [![Badge](https://img.shields.io/badge/%20handlebars-%3D?logo=handlebars.js&color=f0772b&label=templating&logoColor=f0772b)](https://handlebarsjs.com/) [![Badge](https://img.shields.io/badge/v3%20node.js-%20%3E%3D_14-forestgreen?logo=node.js)](https://nodejs.org) [![Badge](https://img.shields.io/badge/v4%20node.js-%20%3E%3D_20-forestgreen?logo=node.js)](https://nodejs.org) [![Badge](https://img.shields.io/npm/dm/vtex-email-framework?color=%23CB3837&logo=npm)](https://www.npmjs.com/package/vtex-email-framework)

## Transactional emails development architecture

### 📦 Setup

```bash
npx create-vtex-email my-emails
```

### 🎮 Commands

| npm | yarn | pnpm |
| ----------- | --- | --- |
|`npm run dev` | `yarn dev`| `pnpm run dev`|
|`npm run build` | `yarn build`| `pnpm run build`|

### ⚔️ Features

* Sass
* Hot Reload
* Partial Files
* Inline CSS
* Dashboard
* Render Test
* Email Stylelint
* Responsive Boilerplate

### 🗺️ Guide

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
        │   Cart.hbs
```

* Partials import

```handlebars
<Header class="partial">{{> Header}}</Header>
```

### 📚 References

[BEM](https://bem-cheat-sheet.9elements.com/)

[Sass](https://sass-lang.com/guide)

[Handlebars](https://handlebarsjs.com/)  

[Can I Email](https://www.caniemail.com/)

[Emails Support](https://www.campaignmonitor.com/css/)
