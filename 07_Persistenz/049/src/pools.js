const { Pool } = require('pg');
const pool = new Pool({
  user: 'example_user',
  password: 'example_password',
  host: 'localhost',
  port: 5432,
  database: 'tests'
});

(async () => {
  try {
    const query = 'SELECT * FROM users ORDER BY id ASC';
    const result = await pool.query(query);
    const { rows } = result;
    rows.forEach(row => {
      const { first_name: firstName, last_name: lastName } = row;
      console.log(`${firstName} ${lastName}`);
    });
    await pool.end();
  } catch (error) {
    console.error(error);
  }
})();
