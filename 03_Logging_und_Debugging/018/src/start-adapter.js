const Logger = require('./Logger');
const logger = new Logger();

logger.info('Program started');

const throwError = () => {
  throw new Error('Example error');
};

try {
  throwError();
} catch (error) {
  logger.error(error.message);
}
