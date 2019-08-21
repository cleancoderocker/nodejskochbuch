#!/usr/bin/env node
const yargs = require('yargs');

const {
  url = 'http://localhost',
  method = 'GET',
  body = '',
  headers = ''
} = yargs.argv;

console.log(`Sending HTTP request
  URL: ${url}
  Method: ${method}
  Body: ${body}
  Headers: ${headers}`);
