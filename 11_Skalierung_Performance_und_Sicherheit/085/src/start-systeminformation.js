const si = require('systeminformation');

(async () => {
  try {
	const system = await si.system();
	console.log(system);
	// 	{ manufacturer: 'Apple Inc.',
	//   model: 'MacBookPro10,2',
	//   version: '1.0',
	//   serial: 'C02KG3TYFFRP',
	//   uuid: 'B564A2ED-586D-594F-98B2-4F8085FD90B6',
	//   sku: 'Mac-AFD8A9D944EA4843' }
	const cpu = await si.cpu();
	console.log(cpu);
	// { manufacturer: 'Intel®',
	//   brand: 'Core™ i5-3230M',
	//   vendor: 'GenuineIntel',
	//   family: '6',
	//   model: '58',
	//   stepping: '9',
	//   revision: '',
	//   voltage: '',
	//   speed: '2.60',
	//   speedmin: '2.60',
	//   speedmax: '2.60',
	//   cores: 4,
	//   cache: { l1d: 32768, l1i: 32768, l2: 262144, l3: 3145728 } }
	const cpuCurrentspeed = await si.cpuCurrentspeed();
	console.log(cpuCurrentspeed);
	// {
	//   min: 2.6,
	//   max: 2.6,
	//   avg: 2.6,
	//   cores: [2.6, 2.6, 2.6, 2.6]
	// }
	const mem = await si.mem();
	console.log(mem);
	// {
	//   total: 8589934592,
	//   free: 137330688,
	//   used: 8452603904,
	//   active: 3061174272,
	//   available: 5528760320,
	//   buffcache: 5391429632,
	//   swaptotal: 1073741824,
	//   swapused: 214433792,
	//   swapfree: 859308032
	// }
	const battery = await si.battery();
	console.log(battery);
	// {
	//   hasbattery: true,
	//   cyclecount: 1372,
	//   ischarging: false,
	//   maxcapacity: 6193,
	//   currentcapacity: 437,
	//   percent: 7,
	//   timeremaining: 19,
	//   acconnected: false,
	//   type: 'Li-ion',
	//   model: '',
	//   manufacturer: 'Apple',
	//   serial: 'D862456P0PBF955AD'
	// }
  } catch (error) {
	console.log(error);
  }
})();