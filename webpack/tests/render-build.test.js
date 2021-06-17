const { readdirSync,existsSync } = require('fs');
const { resolve } = require('path');
const files = resolve('emails', 'dist')
if (!existsSync(files)) throw new Error('run yarn build first')
const app  = require('../server/app');
const request = require('isomorphic-fetch');
const PORT = 3000

app.set('views', files);
const server = app.listen(PORT);
const templates = readdirSync(files).map(file => file.split('.hbs')[0])

afterAll(() => server.close());

describe("emails/dist", () => {

    for (let template of templates) {
      test(`${template}`, async () => {

        const result = await request(`http://localhost:${PORT}/${template}`)


        if (result.status != 200) {
          const message = await result.text()
          throw new Error(`Error ${message.split('.hbs')[1].split('<br>')[0].replace('&#39;',"'")}`)
        }
        expect(result.status).toBe(200);

      });
    }
    
});