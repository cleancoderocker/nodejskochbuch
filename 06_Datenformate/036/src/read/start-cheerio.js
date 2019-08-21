const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const XML_PATH = path.join(__dirname, '..', '..', 'xml', 'calendar.xml');

fs.readFile(XML_PATH, (error, content) => {
  const $ = cheerio.load(content.toString(), {
    normalizeWhitespace: true,
    xmlMode: true
  });

  const calendar = $('calendar');
  const calendarName = calendar.attr('name');
  console.log(`Calendar:  ${calendarName}`)
  const owner = $('calendar owner name');
  console.log(`Owner:     ${owner.text()}`)
  const appointments = $('appointments appointment');
  appointments.each((index, element) => {
    const description = $('description', element);
    const time = $('time', element);
	const location = $('location', element);
    console.log(`Task:      ${description.text()}`);
    console.log(`Time:      ${time.text()}`);
	console.log(`Location:  ${location.text()}`);
  });
});
