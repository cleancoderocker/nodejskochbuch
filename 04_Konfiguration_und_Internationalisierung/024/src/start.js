#!/usr/bin/env node
process.argv.forEach((value, index) => {
  console.log(`${index}: ${value}`);
});

// Aufruf: node src/start.js nodejs is cool
// 0: /usr/local/bin/node
// 1: /Users/philipackermann/workspace/nodejskochbuch/sources/chapter-02-events-streams/recipe-02/src/start.js
// 2: nodejs
// 3: is
// 4: cool

// /usr/local/bin/node
console.log(process.execPath);
