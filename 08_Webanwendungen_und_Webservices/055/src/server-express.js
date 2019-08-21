const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 3000;
const options = {
  key: fs.readFileSync('./localhost.key'),
  cert: fs.readFileSync('./localhost.cert')
};
app.get('/', (request, response) => {
  response.send('Hello World');
});
const server = https.createServer(options, app);
server.listen(PORT, () => {
  console.log(`Server started at: https://localhost: ${PORT}`);
});
