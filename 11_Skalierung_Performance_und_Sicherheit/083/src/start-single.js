const http = require('http');

http
  .createServer((request, response) => {
    console.log(`Process ${process.pid} handle request`);
    const content = 'Hallo Welt';
    response.writeHead(200, {
      'Content-Length': content.length,
      'Content-Type': 'text/plain'
    });
    response.end(content);
  })
  .listen(3000);
