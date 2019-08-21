const esprima = require('esprima');

const input = 'const name = "Max Mustermann"';
const ast = esprima.parse(input);
console.log(JSON.stringify(ast, null, 2));

/*
Program {
  type: 'Program',
  body:
   [ VariableDeclaration {
     type: 'VariableDeclaration',
     declarations: [Array],
     kind: 'const' } ],
  sourceType: 'script' }
{
  "type": "Program",
  "body": [
  {
    "type": "VariableDeclaration",
    "declarations": [
    {
      "type": "VariableDeclarator",
      "id": {
      "type": "Identifier",
      "name": "name"
      },
      "init": {
      "type": "Literal",
      "value": "Max Mustermann",
      "raw": "\"Max Mustermann\""
      }
    }
    ],
    "kind": "const"
  }
  ],
  "sourceType": "script"
}
*/
