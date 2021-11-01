
const app = require('./app')
const { Server } = require('ws');

app.listen(5050, () => new Server({ port: 8090 }));
