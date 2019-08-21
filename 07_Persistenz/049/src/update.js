const { Client } = require('pg');
const client = new Client({
  user: 'example_user',
  password: 'example_password',
  host: 'localhost',
  port: 5432,
  database: 'tests'
});

(async () => {
  try {
    await client.connect();
    const user = {
      firstName: 'Max',
      lastName: 'Mustermann',
      age: 46
    };
    const query = 'UPDATE users SET age=($1) WHERE first_name=($2)';
    await client.query(query, [user.age, user.firstName]);
    await client.end();
  } catch (error) {
    console.error(error);
  }
})();
