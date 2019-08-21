const esprima = require('esprima');

const input = 'const name = "Max Mustermann"';

const ast = esprima.parse(input);
ast.body[0].declarations[0].id.name = 'fullname';
console.log(JSON.stringify(ast, null, 2));
/*
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
            "name": "fullname"
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
