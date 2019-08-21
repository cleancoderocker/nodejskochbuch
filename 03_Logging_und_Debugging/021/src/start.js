const wait = (timeout = 5000) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timeout);
  });
};

(async () => {
  for (let i = 0; i < 10; i++) {
	console.log('wait');
	debugger;
    await wait();
    console.log('waited');
  }
})();
