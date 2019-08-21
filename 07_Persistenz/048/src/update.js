const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'sakila'
});

connection.connect(error => {
  if (error) {
    console.error(error);
  } else {
    console.log('Connected');
  }
});

const QUERY = 'UPDATE actor SET first_name = ? WHERE actor_id = ?';
const updateData = ['MORITZ', 201];

connection.query(QUERY, updateData, (error, result) => {
  if (error) {
    console.error(error);
  }

  console.log(`Changed ${result.changedRows} row(s)`);
});

connection.end();
