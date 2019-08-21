const builder = require('xmlbuilder');

const json = {
  calendar: {
    '@xmlns': 'http://www.nodejskochbuch.de/xml/calendar',
    '@xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    '@xsi:schemaLocation':
      'http://www.nodejskochbuch.de/xml/calendar calendar.xsd',
    '@name': 'Example calendar',
    owner: {
      name: 'Max Mustermann'
    },
    appointments: [
      {
        appointment: {
          description: 'Katze füttern',
          time: '8:00',
          location: 'Küche'
        }
      }
    ]
  }
};

const xml = builder
  .create(json)
  .end({ pretty: true });

console.log(xml);
