const os = require('os');

console.log(os.arch());
// x64

console.log(os.cpus());
// [
//   {
//     model: 'Intel(R) Core(TM) i5-3230M CPU @ 2.60GHz',
//     speed: 2600,
//     times: { user: 1037180, nice: 0, sys: 621350, idle: 5246580, irq: 0 }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-3230M CPU @ 2.60GHz',
//     speed: 2600,
//     times: { user: 510710, nice: 0, sys: 273220, idle: 6120070, irq: 0 }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-3230M CPU @ 2.60GHz',
//     speed: 2600,
//     times: { user: 993180, nice: 0, sys: 485310, idle: 5425510, irq: 0 }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-3230M CPU @ 2.60GHz',
//     speed: 2600,
//     times: { user: 521370, nice: 0, sys: 277610, idle: 6105020, irq: 0 }
//   }
// ];

console.log(os.endianness());
// LE

console.log(os.freemem());
// 95858688

console.log(os.homedir());
// /Users/philipackermann

console.log(os.hostname());
// Philips-MBP.fritz.box

console.log(os.loadavg());
// [ 2.494140625, 2.47216796875, 2.4873046875 ]

// console.log(os.networkInterfaces());
console.log(os.platform());
// darwin

console.log(os.release());
// 15.6.0

console.log(os.tmpdir());
// /var/folders/dc/5_bbrz6j12s055j4psqwh2qc0000gn/T

console.log(os.totalmem());
// 8589934592

console.log(os.type());
// Darwin

console.log(os.uptime());
// 43420

console.log(os.userInfo());
// { uid: 501,
// 	gid: 20,
// 	username: 'philipackermann',
// 	homedir: '/Users/philipackermann',
// 	shell: '/bin/bash' }
