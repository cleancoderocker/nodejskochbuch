const http = require('http');
const url = require('url');

const server = http.createServer();

const sum = async (n) => {
  return new Promise((resolve, reject) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += i;
    }
    resolve(sum);
  });
};

server.on('request', (request, response) => {
  const parts = url.parse(request.url, true);
  if (parts.pathname === '/sum') {
    const query = parts.query;
    const n = parseInt(query.n);
    sum(n).then((result) => {
      response.end(`Sum is ${result}`);
    });
  } else {
    response.end('ok');
  }
});

server.listen(3000);
