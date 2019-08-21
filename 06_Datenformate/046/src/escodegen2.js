const escodegen = require('escodegen');

const names = [
  'Max Mustermann',
  'Moritz Mustermann',
  'Peter Mustermann'
];
const body = names.map((name, index) => ({
  type: 'VariableDeclaration',
  declarations: [
    {
      type: 'VariableDeclarator',
      id: {
        type: 'Identifier',
        name: `fullname${index + 1}`
      },
      init: {
        type: 'Literal',
        value: name
      }
    }
  ],
  kind: 'const'
}));

const input = {
  type: 'Program',
  body,
  sourceType: 'script'
};
const code = escodegen.generate(input);
console.log(code);
// const fullname1 = 'Max Mustermann';
// const fullname2 = 'Moritz Mustermann';
// const fullname3 = 'Peter Mustermann';
