const { readdirSync, existsSync } = require('fs');
const { resolve } = require('path');
const files = resolve(process.cwd(),'emails', 'dist')
const app = require(resolve('server','app'))
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

      if (response.status !== 200) {
        const message = await response.text()
        throw new Error(`${message.split('<pre>')[1].split('<br>')[0].replace(/&#39;/g, "'")}`)
      }

      expect(response.status).toBe(200)
    });
  }

});