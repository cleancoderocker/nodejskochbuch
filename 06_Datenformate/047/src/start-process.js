const postcss = require('postcss');
const fs = require('fs');
const path = require('path');
const inputCSS = fs
  .readFileSync(path.join(__dirname, '..', 'styles.css'))
  .toString();
const ast = postcss.parse(inputCSS);

postcss()
	.process(inputCSS, { from: 'styles.css', to: 'styles.out.css' })
	.then(result => {
		console.log(result);
	});
