const express = require('express');

module.exports = class Server {
  constructor(host, port) {
    this.host = host;
    this.port = port;
  }

  start() {
    const app = express();
    app.get('/api/v1', (request, response) => {
      response.send('Simple web service');
    });
    app.listen(this.port, this.host);
    console.log(`Running on http://${this.host}:${this.port}`);
  }
};
