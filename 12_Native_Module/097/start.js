const { createPerson } = require('./');

createPerson('Max', 'Mustermann', (person) => {
  console.log(person);
  // { firstName: 'Max', lastName: 'Mustermann' }
});
