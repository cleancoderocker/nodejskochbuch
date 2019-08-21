const numbers = Array(10000000).fill(Math.random());
heapdump.writeSnapshot((error, filename) => {
  console.log(`Heap dump written to ${filename}`);
});
