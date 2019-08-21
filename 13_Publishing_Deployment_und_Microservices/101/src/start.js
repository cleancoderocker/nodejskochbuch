'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/api/v1.0', (request, response) => {
  response.json({
	  version: '1.0',
	  title: 'Simple Webservice',
	  description: 'Webservice running in Docker',
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
