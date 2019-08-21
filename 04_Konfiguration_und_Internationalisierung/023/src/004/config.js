const convict = require('convict');
const path = require('path');

const config = convict({
  server: {
    port: {
      doc: 'The server port',
      format: 'port',
      default: 'localhost',
      env: 'PORT',
      arg: 'port'
    }
  },
  database: {
    host: {
      doc: 'Database host',
      format: '*',
      default: 'localhost'
    },
    user: {
      doc: 'Username',
      format: String,
      default: 'admin'
    },
    pass: {
      doc: 'Password',
      format: String,
      default: 'secret',
      sensitive: true
    }
  }
});

config.loadFile(path.join(__dirname, `config.json`));

config.validate({ allowed: 'strict' });

module.exports = config;
