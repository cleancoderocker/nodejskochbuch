const config = {
  server: {
    port: process.env.PORT || 8080
  },
  database: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'admin',
    pass: process.env.DB_PASS || 'secret'
  }
};
module.exports = config;
