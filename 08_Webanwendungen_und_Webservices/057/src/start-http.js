const http = require('http');

const options = {
  host: 'localhost',
  port: '3000',
  path: '/api/v1/contacts'
};

const request = http.request(options, (response) => {
  let body = '';

  response.on('data', (data) => {
    body += data;
  });

  response.on('end', () => {
    const contacts = JSON.parse(body);
    contacts.forEach((contact) => {
      console.log(contact);
    });
  });
});

request.end();
