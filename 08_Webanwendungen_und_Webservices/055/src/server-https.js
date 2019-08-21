const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./localhost.key'),
  cert: fs.readFileSync('./localhost.cert')
};

const PORT = 8080;
function handleRequest(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hallo Welt');
}
const server = https.createServer(options, handleRequest);
server.listen(PORT, () => {
  console.log(`Server started at: https://localhost: ${PORT}`);
});
