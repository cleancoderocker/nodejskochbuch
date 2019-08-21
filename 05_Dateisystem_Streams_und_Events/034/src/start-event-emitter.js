const { EventEmitter } = require('events');

// EventEmitter-Instanz zum Versenden
// und Empfangen von Events
const eventEmitter = new EventEmitter();

// Name des Events, was versendet wird
const eventType = 'exampleEvent';

// Registrieren eines Event-Listeners für das Event
eventEmitter.on(eventType, message => {
  console.log(message);
  console.log(message.topic);
  console.log(message.content);
});

// Nachricht, die versendet werden soll
const message = {
	topic: 'A message',
	content: 'Some dummy content'
}

// Versenden der Nachricht
eventEmitter.emit(eventType, message);
