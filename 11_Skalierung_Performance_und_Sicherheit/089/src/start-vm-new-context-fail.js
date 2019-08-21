const vm = require('vm');
const sandbox = { someObject: {} };
const code = `
  const ForeignObject = someObject.constructor;
  const ForeignFunction = ForeignObject.constructor;
  const process = ForeignFunction('return process')();
  const console = ForeignFunction('return console')();
  console.log('Exiting process');
  process.exit(0);
`;

console.log('Before executing code');
vm.runInNewContext(code, sandbox);
// Wird nicht ausgeführt
console.log('After executing code');
