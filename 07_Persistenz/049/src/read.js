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
    const query = 'SELECT * FROM users ORDER BY id ASC';
    const result = await client.query(query);
    const { rows } = result;
    rows.forEach(row => {
      const { first_name: firstName, last_name: lastName } = row;
      console.log(`${firstName} ${lastName}`);
    });
    await client.end();
  } catch (error) {
    console.error(error);
  }
})();
