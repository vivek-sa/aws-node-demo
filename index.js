const http = require('http');

http
  .createServer((req, res) => {
    res.write('Hello, Vivek Patidar this side.');
    res.end();
  })
  .listen(80);
