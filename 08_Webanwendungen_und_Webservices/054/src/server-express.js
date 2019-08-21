const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
  response.send('Hello World');
});

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Server started at: http://localhost:${PORT}`);
  }
});
