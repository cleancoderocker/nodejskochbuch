const { pipeline } = require('stream');

const SensorDuplex = require('./SensorDuplex');

const sensorDuplex = new SensorDuplex();

pipeline(sensorDuplex, sensorDuplex, (error) => {
  if (error) {
    console.error('Pipeline failed.', error);
  } else {
    console.log('Pipeline succeeded.');
  }
});
