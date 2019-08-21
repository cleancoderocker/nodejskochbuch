const postcss = require('postcss');
const fs = require('fs');
const path = require('path');

const inputCSS = fs
  .readFileSync(path.join(__dirname, '..', 'styles.css'))
  .toString();
const ast = postcss.parse(inputCSS);

ast.walkRules(rule => {
  const { selector } = rule;
  console.log(`selector: ${selector}`);
  rule.walk(node => {
    const { prop, value } = node;
    console.log(`--> property: ${prop}`);
    console.log(`--> value: ${value}`);
  });
});
// Ausgabe:
// selector: div.someClass > h2
// --> property: margin
// --> value: 25px
// --> property: background-color
// --> value: rgb(240, 240, 240)
