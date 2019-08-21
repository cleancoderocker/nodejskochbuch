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
    // ...
    await client.end();
  } catch (error) {
    console.error(error);
  }
})();
