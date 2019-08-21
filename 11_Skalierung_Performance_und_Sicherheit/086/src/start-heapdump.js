const heapdump = require('heapdump');

const numbers = Array(10000000).fill(Math.random());
const usage = process.memoryUsage();
console.log(`RSS: ${toMB(usage.rss)} MB`);
console.log(`Heap total: ${toMB(usage.heapTotal)} MB`);
console.log(`Heap used: ${toMB(usage.heapUsed)} MB`);
console.log(`External: ${toMB(usage.external)} MB`);
// RSS: 171.86 MB
// Heap total: 158.84 MB
// Heap used: 156.16 MB
// External: 0.01 MB