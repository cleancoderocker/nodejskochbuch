const esprima = require('esprima');

const input = 'const name = "Max Mustermann"';
const tokens = esprima.tokenize(input);
console.log(tokens);

/*
[ { type: 'Keyword', value: 'const' },
  { type: 'Identifier', value: 'name' },
  { type: 'Punctuator', value: '=' },
  { type: 'String', value: '"Max Mustermann"' } ]
*/
