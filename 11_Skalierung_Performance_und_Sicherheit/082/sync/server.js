const http = require('http');
const url = require('url');

const sum = (n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
};

const server = http.createServer();

server.on('request', (request, response) => {
  const parts = url.parse(request.url, true);
  if (parts.pathname === '/sum') {
    const query = parts.query;
    const n = parseInt(query.n);
    const result = sum(n);
    return response.end(`Result is ${result}`);
  } else {
    response.end('ok');
  }
});

server.listen(3000);
