const vm = require('vm');
const code = `
  console.log('Exiting process');
  process.exit(0);
`;

console.log('Before executing code');
vm.runInThisContext(code, {});
// Wird nicht ausgeführt
console.log('After executing code');
