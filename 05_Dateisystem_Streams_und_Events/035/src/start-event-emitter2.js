const { EventEmitter2 } = require('eventemitter2');

const emitter = new EventEmitter2({
  // Verwenden von Wildcards an- und ausschalten
  // standardmäßig auf "false" gesetzt.
  wildcard: true,

  // Angabe des Trennzeichens zur Segmentierung
  // von Namespaces, standardmäßig auf "." gesetzt.
  delimiter: '.',

  // Angabe darüber, ob ein Event ausgelöst werden soll,
  // wenn ein neuer Listener hinzugefügt wurde, 
  // standardmäßig auf "false" gesetzt.
  newListener: false,

  // Angabe über die maximale Anzahl an erlaubten
  // Listenern, standardmäßig auf 10 gesetzt.
  maxListeners: 20
});

emitter.on('player.*', (value) => {
  console.log(value);
});

emitter.emit('player.started', {
	artist: 'Ben Harper',
	song: 'Diamonds On the Inside'
});

emitter.emit('player.paused', {
	artist: 'Ben Harper',
	song: 'Diamonds On the Inside',
	minute: 2,
	second: 25
});

emitter.emit('player.volumechanged', {
	volume: 11
});

emitter.emit('player.stopped', {});