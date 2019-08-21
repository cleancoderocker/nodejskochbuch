const builder = require('xmlbuilder');

const xml = builder
  .create('calendar', { encoding: 'utf-8' })
  .att('xmlns', 'http://www.nodejskochbuch.de/xml/calendar')
  .att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
  .att('xsi:schemaLocation', 'http://www.nodejskochbuch.de/xml/calendar calendar.xsd')
  .att('name', 'Example calendar')
  .ele('owner')
  .ele('name', 'Max Mustermann')
  .up()
  .up()
  .ele('appointments')
  .ele('appointment')
  .ele('description', 'Katze füttern')
  .up()
  .ele('time', '8:00')
  .up()
  .ele('location', 'Küche')
  .end({ pretty: true });

console.log(xml);
