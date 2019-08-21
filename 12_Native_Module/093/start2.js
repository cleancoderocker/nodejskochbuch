const { createPerson } = require('./');

const person = createPerson(
  'Max',
  'Mustermann',
  44,
  '0123/1234567',
  'maxmustermann@nodejskochbuch.de'
);
console.log(person);
// {
//   firstName: 'Max',
//   lastName: 'Mustermann',
//   contact: {
//     phone: '0123/1234567',
//     email: 'maxmustermann@nodejskochbuch.de'
//   }
// };
