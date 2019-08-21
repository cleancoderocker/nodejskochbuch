const { pipeline } = require('stream');

const SensorDuplex = require('./SensorDuplex');

const sensorReadable = new SensorDuplex();
const sensorWritable = new SensorDuplex();

pipeline(sensorReadable, sensorWritable, (error) => {
  if (error) {
    console.error('Pipeline failed.', error);
  } else {
    console.log('Pipeline succeeded.');
  }
});
