const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
  contactPoints: ['localhost'],
  keyspace: 'userdata'
});

const queryUpdate = "UPDATE users SET email = ? WHERE key = ?";
const querySelect = 'SELECT * FROM users WHERE key = ?';
(async () => {
	const key = 'maxmustermann';
	const newEmail = 'maxmustermann1979@nodejsbuch.de';
	await client.execute(queryUpdate, [newEmail, key]);
	const result = await client.execute(querySelect, [key]);
	const first = result.rows[0];
	console.log(first);
	// Ausgabe:
	// Row {
	// 	key: 'maxmustermann',
	// 	birthdate: 1979-06-24T23:00:00.000Z,
	// 	email: 'maxmustermann1979@nodejsbuch.de',
	// 	firstname: 'Max',
	// 	lastname: 'Mustermann' }
})();
