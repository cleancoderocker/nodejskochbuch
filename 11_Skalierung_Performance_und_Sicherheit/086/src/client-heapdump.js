const request = require('request');

const URL = 'http://localhost:3000/heapdump';

request.get(URL, (error, response, body) => {
  console.log(body);
});
