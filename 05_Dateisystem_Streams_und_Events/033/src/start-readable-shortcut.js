const { pipeline, Readable } = require('stream');

const SensorReadable = require('./SensorReadable');

const sensorReadable = new SensorReadable();

pipeline(sensorReadable, process.stdout, (error) => {
  if (error) {
    console.error('Pipeline failed.', error);
  } else {
    console.log('Pipeline succeeded.');
  }
});
