const { pipeline } = require('stream');

const SensorReadable = require('./SensorReadable');
const SensorWritable = require('./SensorWritable');

const sensorReadable = new SensorReadable();
const sensorWritable = new SensorWritable();

pipeline(sensorReadable, sensorWritable, (error) => {
  if (error) {
    console.error('Pipeline failed.', error);
  } else {
    console.log('Pipeline succeeded.');
  }
});
