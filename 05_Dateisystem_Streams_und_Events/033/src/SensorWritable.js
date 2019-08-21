const { Writable } = require('stream');

class SensorWritable extends Writable {
  _write(chunk, encoding, callback) {
    const string = chunk.toString();
    const value = parseInt(string);
    if (value < 0) {
      callback(new Error(`Invalid: ${value}`));
    } else {
      console.log(`Valid: ${value}`);
      callback();
    }
  }
}

module.exports = SensorWritable;
