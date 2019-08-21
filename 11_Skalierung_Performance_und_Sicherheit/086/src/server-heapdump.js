const heapdump = require('heapdump');
const express = require('express');
const app = express();
const port = 3000;

const requestsLog = [];

app.get('/', (request, response) => {
  response.send('Hello World');
  requestsLog.push(request);
});

app.get('/heapdump', (request, response) => {
  response.send('Writing heapdump');
  heapdump.writeSnapshot((error, filename) => {
    console.log(`Heap dump written to ${filename}`);
  });
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
