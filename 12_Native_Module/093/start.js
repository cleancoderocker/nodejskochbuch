const { createPerson } = require('./');

const person = createPerson();
console.log(person);
// {
//   firstName: 'Max',
//   lastName: 'Mustermann',
//   contact: {
//     phone: '0123/1234567',
//     email: 'maxmustermann@nodejskochbuch.de'
//   }
// };
