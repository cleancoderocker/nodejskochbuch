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

const QUERY = 'SELECT * FROM actor';
connection.query(QUERY, (error, rows, fields) => {
  if (error) {
    console.error(error);
  }
  console.log(rows);
  rows.forEach(row => {
    const { first_name: firstName, last_name: lastName } = row;
    console.log(`${firstName} ${lastName}`);
  });
});

connection.end();
