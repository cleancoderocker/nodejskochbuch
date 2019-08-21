const http = require('http');

const PORT = process.env.PORT || 8080;
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

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
