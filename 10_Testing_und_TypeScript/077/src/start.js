const express = require('express');
const APIRouter = require('./APIRouter');
const bodyParser = require('body-parser');
const app = new express();
const apiRouter = new APIRouter();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1', apiRouter);

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Server started at: http://localhost:${PORT}`);
  }
});

module.exports = app;
