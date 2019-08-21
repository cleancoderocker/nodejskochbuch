#!/usr/bin/env node
const parameters = {};
let current;

process.argv.forEach((value, index) => {
  if (value.startsWith('--')) {
    current = value.substring(2);
  } else {
    parameters[current] = value;
  }
});

const {
  url = 'http://localhost',
  method = 'GET',
  body = '',
  headers = ''
} = parameters;

console.log(`Sending HTTP request
  URL: ${url}
  Method: ${method}
  Body: ${body}
  Headers: ${headers}`);
