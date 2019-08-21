const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (request, response) => {
  response.json({
	  version: '1.0',
	  title: 'Blog Service',
	  description: 'A service for managing blogs',
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
