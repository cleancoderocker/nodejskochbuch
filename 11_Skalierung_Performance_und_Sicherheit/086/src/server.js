const express = require('express');
const app = express();
const port = 3000;

const requestsLog = [];

app.get('/', (request, response) => {
  response.send('Hello World');
  requestsLog.push(request);
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
