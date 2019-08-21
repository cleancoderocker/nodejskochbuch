const Ajv = require('ajv');

const schema = require('./schema');
const input = [
	require('./data'),
	require('./data2')
]

const ajv = new Ajv();
const validate = ajv.compile(schema);

input.forEach((data) => {
	const valid = validate(data);
	if (!valid) {
	  console.log('JSON is not valid');
	  console.log(validate.errors);
	} else {
	  console.log('JSON is valid');
	}
});
