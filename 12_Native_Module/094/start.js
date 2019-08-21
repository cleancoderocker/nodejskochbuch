const { simpleCallback } = require('./');

simpleCallback((nativeMessage) => {
  console.log(nativeMessage);
});
