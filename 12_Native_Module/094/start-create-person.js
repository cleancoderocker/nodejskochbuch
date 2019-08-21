const { createPerson } = require('./');

createPerson('Max', 'Mustermann', 45, (person) => {
  console.log(person);
  // { firstName: 'Max', lastName: 'Mustermann' }
});
