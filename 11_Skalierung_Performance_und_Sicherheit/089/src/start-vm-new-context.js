const vm = require('vm');
const code = `
  console.log('Exiting process');
  process.exit(0);
`;

console.log('Before executing code');
try {
  const sandbox = {};
  vm.runInNewContext(code, sandbox);
} catch (error) {
  console.error(error);
}
console.log('After executing code');
