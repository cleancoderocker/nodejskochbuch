#!/usr/bin/env node
const program = require('commander');

program
  .version('1.0.0')
  .option('-u, --url [url]', 'The request URL')
  .option('-m, --method [method]', 'The HTTP method')
  .option('-b, --body [body]', 'The request body')
  .option('-h, --headers [headers]', 'The request headers')
  .parse(process.argv);

const {
  url = 'http://localhost',
  method = 'GET',
  body = '',
  headers = ''
} = program;
  
console.log(`Sending HTTP request
  URL: ${url}
  Method: ${method}
  Body: ${body}
  Headers: ${headers}`);
  