const { Readable } = require('stream');

const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class SensorReadable extends Readable {
  constructor(opt) {
    super(opt);
    this._maxValues = 100000;
    this._index = 1;
  }

  _read() {
    const i = this._index++;
    if (i > this._maxValues) {
      this.push(null);
    } else {
      const numberAsString = String(random(-1, 2000));
      const buffer = Buffer.from(`${numberAsString}\n`, 'utf8');
      this.push(buffer);
    }
  }
}

module.exports = SensorReadable;
