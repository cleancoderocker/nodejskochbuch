const http = require('http');
const config = require('./config.json');

const PORT = config.server.port;
const DB_HOST = config.database.host;
const DB_USER = config.database.user;
const DB_PASS = config.database.pass;

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
