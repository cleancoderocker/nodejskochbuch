const esprima = require('esprima');
const estraverse = require('estraverse');

const input = `const name = "Max Mustermann";
console.log(name);
`;
const ast = esprima.parse(input);

estraverse.traverse(ast, {
  enter(node, parent) {},
  leave(node, parent) {
    if (node.type === 'Identifier' && node.name === 'name') {
      node.name = 'fullname';
    }
  }
});

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
