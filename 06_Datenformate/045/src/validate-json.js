const Ajv = require('ajv');

const schema = require('./schema');
const data = require('./data');

const ajv = new Ajv();
const valid = ajv.validate(schema, data);
if (!valid) {
  console.log('JSON is not valid');
  console.log(ajv.errors);
} else {
  console.log('JSON is valid');
}
