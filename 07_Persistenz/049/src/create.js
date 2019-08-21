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
      age: 45
    };
    const query = 'INSERT INTO users(first_name, last_name, age) values($1, $2, $3)'
    const result = await client.query(
      query,
      [user.firstName, user.lastName, user.age]
    );
    await client.end();
  } catch (error) {
    console.error(error);
  }
})();
