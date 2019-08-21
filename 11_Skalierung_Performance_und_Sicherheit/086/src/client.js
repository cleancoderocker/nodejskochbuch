const request = require('request');

const URL = 'http://localhost:3000';

for (let i = 0; i < 10000; i++) {
	request.get(URL, (error, response, body) => {
		if (error) {
			console.error(error);
		} else {
			console.log(body);
		}
	});
}

