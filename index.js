const express = require('express');
const http = require('http');
const path=require('path');

const app = express();

app.use(express.static('static'));

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});
const port = process.env.PORT || 9090;

const server = http.createServer(app);

server.listen(port, '0.0.0.0');

server.on('listening', () => {
  console.info('Server listening on port -', port);
})

server.on('error', (err) => {
  console.log(err);
});