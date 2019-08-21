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

const QUERY = 'DELETE FROM actor WHERE actor_id = ?';
const deleteData = [201];

connection.query(QUERY, deleteData, (error, result) => {
  if (error) {
    console.error(error);
  }

  console.log(`Deleted ${result.affectedRows} row(s)`);
});

connection.end();
