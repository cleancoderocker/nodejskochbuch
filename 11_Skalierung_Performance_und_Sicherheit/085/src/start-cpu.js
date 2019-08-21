console.log(process.cpuUsage());
// { user: 82340, system: 14597 }

console.log(process.memoryUsage());
// {
//   rss: 21766144,
//   heapTotal: 8388608,
//   heapUsed: 4384376,
//   external: 8240
// }

const randoms = [];
for (let i=0; i<50000000; i++) {
	randoms.push(Math.random());
}

console.log(process.cpuUsage());
// { user: 1283682, system: 540527 }

console.log(process.memoryUsage());
// {
//   rss: 332201984,
//   heapTotal: 412135424,
//   heapUsed: 406463600,
//   external: 8240
// }