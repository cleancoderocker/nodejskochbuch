const sum = (n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
};

process.on('message', (message) => {
  const result = sum(message.n);
  process.send(result);
});
