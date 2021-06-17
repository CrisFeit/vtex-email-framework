const { readdirSync, existsSync } = require('fs');
const { resolve } = require('path');
const files = resolve('emails', 'dist')
const app = require('../webpack/server/app')
const request = require('isomorphic-fetch')
const port = 3050

if (!existsSync(files)) throw new Error('run yarn build first')

app.set('views', files)
const server = app.listen(port)
const templates = readdirSync(files)
  .filter(file => /.hbs$/gi.test(file))
  .map(file => file.split('.hbs')[0])

afterAll(() => server.close())

describe("emails/dist", () => {

  for (let template of templates) {
    test(`${template}`, async () => {

      const response = await request(`http://localhost:${port}/${template}`)

      if (response.status >= 500 && response.status <= 590) {
        const message = await response.text()
        throw new Error(`Error${message.split('.hbs')[1].split('<br>')[0].replace("&#39;", "'")}`)
      }

      expect(response.status).toBe(200)
    });
  }

});