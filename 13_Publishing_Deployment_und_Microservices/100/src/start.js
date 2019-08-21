const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/api/v1', (request, response) => {
  response.send('Webservice running in Docker');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
