const bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: 'example-logger',
  level: 'info',
  streams: [
    {
      level: 'info',
      stream: process.stdout
    },
    {
      level: 'error',
      path: 'error.log'
    }
  ]
});

// Ausgabe auf Konsole
logger.info('Program started');

const throwError = () => {
  throw new Error('Example error');
};

try {
  throwError();
} catch (error) {
  // Ausgabe in Datei
  logger.error(error.message);
}
