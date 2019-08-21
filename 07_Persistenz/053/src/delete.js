const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
  contactPoints: ['localhost'],
  keyspace: 'userdata'
});

const queryDelete = 'DELETE FROM users WHERE key = ?';
const querySelect = 'SELECT * FROM users WHERE key = ?';
(async () => {
	const key = 'maxmustermann';
	await client.execute(queryDelete, [key]);
	const result = await client.execute(querySelect, [key]);
	console.log(result.rows.length);
	// Ausgabe: 0
})();
