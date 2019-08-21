const date = new Date(Date.UTC(2016, 8, 15, 8, 0, 0));
// 2016-9-15
console.log(new Intl.DateTimeFormat('de').format(date));
// 9/15/2016
console.log(new Intl.DateTimeFormat('en').format(date));
// 2016-9-15 10:00:00
console.log(date.toLocaleString('de'));
// 9/15/2016, 10:00:00 AM
console.log(date.toLocaleString('en'));
// 2016-9-15
console.log(date.toLocaleDateString('de'));
// 9/15/2016
console.log(date.toLocaleDateString('en'));
// 10:00:00
console.log(date.toLocaleTimeString('de'));
// 10:00:00 AM
console.log(date.toLocaleTimeString('en'));
