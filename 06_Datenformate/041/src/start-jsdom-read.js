const jsdom = require('jsdom');
const fs = require('fs');
const path = require('path');
const { JSDOM } = jsdom;
const INPUT = path.join(__dirname, '..', 'data', 'index.html');
const content = fs.readFileSync(INPUT);

const dom = new JSDOM(content);
const document = dom.window.document;
const tableCells = document.getElementsByTagName('td');
for (let i=0; i<tableCells.length; i++) {
	const textContent = tableCells[i].textContent;
	console.log(textContent);
}
