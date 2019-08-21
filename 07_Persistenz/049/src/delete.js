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
      firstName: 'Moritz',
      lastName: 'Mustermann',
      age: 45
    };
    const query = 'DELETE FROM users WHERE first_name=($1)';
    await client.query(query, [user.firstName]);
    await client.end();
  } catch (error) {
    console.error(error);
  }
})();
