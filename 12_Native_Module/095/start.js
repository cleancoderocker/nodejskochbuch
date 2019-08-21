const { simplePromise } = require('./');

simplePromise('Max', 'Mustermann', 45).then((person) => {
  console.log(person);
});
