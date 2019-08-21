const EventEmitter = require('events');
const ConverterEvents = require('./ConverterEvents');

module.exports = class Converter {
  constructor() {
    this._emitter = new EventEmitter();
  }

  async convert(url) {
    this.notify(ConverterEvents.STARTED_CONVERSION, { url });
    await this._wait();
    this.notify(ConverterEvents.STARTED_DOWNLOAD, { url });
    await this._wait();
    this.notify(ConverterEvents.FINISHED_DOWNLOAD, { url });
    await this._wait();
    this.notify(ConverterEvents.STARTED_PDF_CONVERSION, { url });
    await this._wait();
    this.notify(ConverterEvents.FINISHED_PDF_CONVERSION, { url });
    await this._wait();
    this.notify(ConverterEvents.FINISHED_CONVERSION, { url });
  }

  /**
   * Helper method to wait for a given number
   * of milliseconds.
   */
  _wait(milliseconds = 500) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, milliseconds);
    });
  }

  notify(event, message) {
    this._emitter.emit(event, {
      ...message
    });
  }

  on(event, callback) {
    this._emitter.on(event, callback);
  }

  off(event, callback) {
    this._emitter.removeListener(event, callback);
  }
};
