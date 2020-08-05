const http = require('http');
const app = require('./app');

const port = process.env.PORT || 5000;

const server = http.createServer(app);
require('./src/App.js')(app);
console.log(port)
server.listen(port);