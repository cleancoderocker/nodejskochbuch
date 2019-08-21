const superagent = require('superagent');

const body = {
  id: '4',
  firstName: 'Petra',
  lastName: 'Mustermann'
};

superagent
  .post('http://localhost:3000/api/v1/contacts')
  .send(body)
  .then((response) => {
    console.log(response.body);
  });
