const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'sakila'
});

connection.connect((error) => {
	if (error) {
		console.error(error);
	} else {
		console.log('Connected');
	}
});

connection.end();