const log4js = require('log4js');

log4js.configure({
  appenders: {
    file: {
      type: 'file',
      filename: 'error.log'
    }
  },
  categories: {
    default: {
      appenders: ['file'],
      level: 'info'
    }
  }
});

const logger = log4js.getLogger('file');

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
