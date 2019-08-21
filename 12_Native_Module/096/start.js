const { createPerson } = require('./');

createPerson('Max', 'Mustermann', 45).then((person) => {
  console.log(person);
});

(async () => {
  const person = await createPerson('Max', 'Mustermann', 45);
  console.log(person);
})()
