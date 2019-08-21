const { pipeline } = require('stream');

const SensorReadable = require('./SensorReadable');
const SensorTransform = require('./SensorTransform');
const SensorWritable = require('./SensorWritable');

const sensorReadable = new SensorReadable();
const sensorTransform = new SensorTransform();
const sensorWritable = new SensorWritable();

pipeline(sensorReadable, sensorTransform, sensorWritable, (error) => {
  if (error) {
    console.error('Pipeline failed.', error);
  } else {
    console.log('Pipeline succeeded.');
  }
});
