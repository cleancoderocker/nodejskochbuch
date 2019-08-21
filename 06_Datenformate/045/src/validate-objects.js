const Ajv = require('ajv');

const schema = {
  title: 'Person',
  type: 'object',
  properties: {
    username: {
      type: 'string'
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    age: {
      description: 'Age in years',
      type: 'integer',
      minimum: 0
    },
    email: {
      type: 'string'
    },
    phone: {
      type: 'string'
    },
    address: {
      type: 'object',
      properties: {
        street: {
          type: 'string'
        },
        postcode: {
          type: 'string'
        },
        city: {
          type: 'string'
        },
        country: {
          type: 'string'
        }
      },
      required: ['street']
    }
  },
  required: ['username', 'firstName', 'lastName']
};

const data = {
  username: 'maxmustermann',
  firstName: 'Max',
  lastName: 'Mustermann',
  age: 45,
  email: 'maxmustermann@nodejskochbuch.de',
  phone: '12345/12345',
  address: {
    street: 'Musterstraße 123',
    postcode: '12345',
    city: 'Musterstadt',
    country: 'Deutschland'
  }
};

const ajv = new Ajv();
const valid = ajv.validate(schema, data);
if (!valid) {
  console.log('JSON is not valid');
  console.log(validate.errors);
} else {
  console.log('JSON is valid');
}
