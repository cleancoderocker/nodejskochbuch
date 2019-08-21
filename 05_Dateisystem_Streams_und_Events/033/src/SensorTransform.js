const { Transform } = require('stream');

class SensorTransform extends Transform {
  _transform(chunk, encoding, callback) {
    const string = chunk.toString();
    const value = parseInt(string);
    if (value < 0) {
      const buffer = Buffer.from('0', 'utf8');
      callback(null, buffer);
    } else {
      callback(null, chunk);
    }
  }
}

module.exports = SensorTransform;
