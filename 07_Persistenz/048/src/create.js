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

const QUERY = 'INSERT INTO actor SET ?';
const actor = {
  first_name: 'MAX',
  last_name: 'MUSTERMANN',
  last_update: new Date()
};

connection.query(QUERY, actor, (error, result) => {
  if (error) {
    console.error(error);
  }
  console.log('Last insert ID:', result.insertId);
});

connection.end();
