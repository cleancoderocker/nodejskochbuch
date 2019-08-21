const Converter = require('./Converter');
const ConverterEvents = require('./ConverterEvents');
const converter = new Converter();

// Registrierung der Event-Listener
converter.on(ConverterEvents.STARTED_CONVERSION, message => {
  console.log(`Started converting ${message.url}`);
});
converter.on(ConverterEvents.STARTED_DOWNLOAD, message => {
  console.log(`Started downloading ${message.url}`);
});
converter.on(ConverterEvents.FINISHED_DOWNLOAD, message => {
  console.log(`Finished downloading ${message.url}`);
});
converter.on(ConverterEvents.STARTED_PDF_CONVERSION, message => {
  console.log(`Started PDF conversion for ${message.url}`);
});
converter.on(ConverterEvents.FINISHED_PDF_CONVERSION, message => {
  console.log(`Finished PDF conversion for ${message.url}`);
});
converter.on(ConverterEvents.FINISHED_CONVERSION, message => {
  console.log(`Finished conversion for ${message.url}`);
});

// Starten der Konvertierung
converter.convert('http://www.nodejsprofibuch.de');
