const esprima = require('esprima');
const escodegen = require('escodegen');

const input = 'const name = "Max Mustermann"';
const ast = esprima.parse(input);
ast.body[0].declarations[0].id.name = 'fullname';

const code = escodegen.generate(ast);
console.log(code);
// const fullname = 'Max Mustermann';
