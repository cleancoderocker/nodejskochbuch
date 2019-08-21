const code = `
  console.log('Exiting process');
  process.exit(0);
`;

console.log('Before executing code');
eval(code);
// Wird nicht ausgeführt
console.log('After executing code');