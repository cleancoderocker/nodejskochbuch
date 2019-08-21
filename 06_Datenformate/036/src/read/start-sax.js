const fs = require('fs');
const path = require('path');
const sax = require('sax');
const saxStream = sax.createStream();

saxStream.on('attribute', (attribute) => {
  console.log(attribute);
});

saxStream.on('opentag', (node) => {
  console.log(node);
});

saxStream.on('error', (error) => {
  console.error(error);
  this._parser.error = null;
  this._parser.resume();
});

const XML_PATH = path.join(__dirname, '..', '..', 'xml', 'calendar.xml');
fs
  .createReadStream(XML_PATH)
  .pipe(saxStream);
