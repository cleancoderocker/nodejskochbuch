const postcss = require('postcss');
const fs = require('fs');
const path = require('path');
const colorConverterPlugin = require('./color-converter-plugin');

const inputCSS = fs
  .readFileSync(path.join(__dirname, '..', 'styles.css'))
  .toString();

console.log(inputCSS);
// Ausgabe:
// div.someClass > h2 {
// 	margin: 25px;
// 	background-color: rgb(240, 240, 240);
// }

postcss([colorConverterPlugin()])
  .process(inputCSS, { from: 'styles.css', to: 'styles.out.css' })
  .then(result => {
	console.log(result.css);
	// Ausgabe:
	// div.someClass > h2 {
	// 	margin: 25px;
	// 	background-color: #f0f0f0;
	// }
  });
