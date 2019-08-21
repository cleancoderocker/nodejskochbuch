const http = require('http');
const url = require('url');
const { fork } = require('child_process');

const server = http.createServer();

server.on('request', (request, response) => {
  const parts = url.parse(request.url, true);
  if (parts.pathname === '/sum') {
    const query = parts.query;
    const n = parseInt(query.n);
    const sum = fork('sum.js');
    sum.send({
      n
    });
    sum.on('message', (result) => {
      response.end(`Sum is ${result}`);
    });
  } else {
    response.end('ok');
  }
});

server.listen(3000);
