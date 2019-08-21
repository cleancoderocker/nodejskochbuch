const http = require('http');
const PORT = 3000;

function handleRequest(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World');
}

const server = http.createServer(handleRequest);
server.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});