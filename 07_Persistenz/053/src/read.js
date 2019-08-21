const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
  contactPoints: ['localhost'],
  keyspace: 'userdata'
});

const query = 'SELECT * FROM users';
(async () => {
	const result = await client.execute(query);
	const first = result.rows[0];
	console.log(first);
	// Ausgabe:
	// Row {
	// 	key: 'maxmustermann',
	// 	birthdate: 1979-06-24T23:00:00.000Z,
	// 	email: 'maxmustermann@nodejsbuch.de',
	// 	firstname: 'Max',
	// 	lastname: 'Mustermann' }
})();
