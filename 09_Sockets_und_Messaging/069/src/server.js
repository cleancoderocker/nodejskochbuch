const fs = require('fs');
const http = require('http');

const MIN = 1;
const MAX = 20;

const server = http.createServer((request, response) => {
  if (request.headers.accept && request.headers.accept === 'text/event-stream') {
    if (request.url === '/events') {
      sendEvent(request, response);
    } else {
      response.writeHead(404);
      response.end();
    }
  } else {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.write(fs.readFileSync(__dirname + '/index.html'));
    response.end();
  }
});

server.listen(8000);

function sendEvent(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
});
  const id = (new Date()).toLocaleTimeString();
  setInterval(() => {
    createServerSendEvent(response, id);
  }, 5000);
  createServerSendEvent(response, id);
}

function createServerSendEvent(response, id) {
  const number = createRandomNumber();
  response.write(`id: ${id}\n`);
  response.write(`data: ${number}\n\n`);
}

function createRandomNumber() {
  let number = Math.floor(Math.random() * MAX) + MIN;
  return number;
}