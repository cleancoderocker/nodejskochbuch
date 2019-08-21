const crypto = require('crypto');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

const users = new Map();

app.use(bodyParser.json());

app.post('/register', (request, response) => {
  const { username, password } = request.body;
  const salt = crypto.randomBytes(128).toString('base64');
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');
  users.set(username, {
    salt,
    hash
  });
  response.sendStatus(200);
});

app.post('/auth', (request, response) => {
  const { username, password } = request.body;
  const { salt, hash } = users.get(username);
  crypto.pbkdf2(password, salt, 10000, 512, 'sha512', (error, encryptHash) => {
    if (crypto.timingSafeEqual(hash, encryptHash)) {
      response.sendStatus(200);
    } else {
      response.sendStatus(401);
    }
  });
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
