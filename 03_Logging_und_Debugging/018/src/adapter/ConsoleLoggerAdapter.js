const LoggerAdapter = require('./LoggerAdapter');

module.exports = class ConsoleLoggerAdapter extends LoggerAdapter {
  info(message, ...optionals) {
    this.logger.info(message, ...optionals);
  }

  error(message, ...optionals) {
    this.logger.error(message, ...optionals);
  }

  warn(message, ...optionals) {
    this.logger.warn(message, ...optionals);
  }

  debug(message, ...optionals) {
    this.info(message, ...optionals);
  }

  trace(message, ...optionals) {
    this.logger.trace(message, ...optionals);
  }

  fatal(message, ...optionals) {
    this.error(message, ...optionals);
  }

  get logger() {
    return console;
  }
};
