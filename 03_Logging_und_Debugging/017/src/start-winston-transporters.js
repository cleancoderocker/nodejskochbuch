const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
	new winston.transports.Console(),
    new winston.transports.File({
      filename: 'error.log',
      level: 'error'
    }),
    new winston.transports.File({
      filename: 'all.log'
    })
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
