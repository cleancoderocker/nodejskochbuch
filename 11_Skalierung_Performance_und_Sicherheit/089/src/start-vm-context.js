const vm = require('vm');
const x = 1;

const sandbox = { x: 2 };
vm.createContext(sandbox);

const code = `
  x += 20;
  y = 25;
`;

vm.runInContext(code, sandbox);

console.log(sandbox.x); // 22
console.log(sandbox.y); // 25
console.log(x);         // 1
// console.log(y);      // not undefined
