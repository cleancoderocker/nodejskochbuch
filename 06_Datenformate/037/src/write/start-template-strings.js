const calendar = {
  name: 'Example calendar',
  owner: {
    name: 'Max Mustermann'
  },
  appointments: {
    list: [
      {
        description: 'Katze füttern',
        time: '8:00',
        location: 'Küche'
      }
    ]
  }
};

const xml = `
<calendar
  xmlns="http://www.nodejskochbuch.de/xml/calendar"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.nodejskochbuch.de/xml/calendar calendar.xsd"
  name="${calendar.name}"
>
  <owner>
    <name>${calendar.owner.name}</name>
  </owner>
  <appointments>${calendar.appointments.list.map(
    (appointment) => `
    <appointment>
      <description>${appointment.description}</description>
      <time>${appointment.time}</time>
      <location>${appointment.location}</location>
    </appointment>`
  )
  .join('')}
  </appointments>
</calendar>
`;

console.log(xml);
