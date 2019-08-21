const http = require('http');
const config = require('./config');

const PORT = config.get('server.port');
const DB_HOST = config.get('database.host');
const DB_USER = config.get('database.user');
const DB_PASS = config.get('database.pass');

console.log(config.toString());

const connectDatabase = () => {
  console.log(`Connecting to database at ${DB_HOST}`);
  // Die folgenden beiden Zeilen nur zu Demonstrationszwecken
  console.log(`Username: ${DB_USER}`);
  console.log(`Password: ${DB_PASS}`);
};

const app = http.createServer((request, response) =>
  response.send('Hello World')
);

app.listen(PORT, () => {
  connectDatabase();
  console.log(`Server is running on port ${PORT}`);
});
