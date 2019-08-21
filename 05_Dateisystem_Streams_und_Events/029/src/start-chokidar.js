const chokidar = require('chokidar');

const watcher = chokidar.watch('./files/*.css', {
  ignored: /[\/\\]\./,
  persistent: true
});

watcher
  .on('add', path => {
    console.log(`Datei ${path} hinzugefügt`);
  })
  .on('addDir', path => {
    console.log(`Verzeichnis ${path} hinzugefügt`);
  })
  .on('change', path => {
    console.log(`Datei ${path} geändert`);
  })
  .on('unlink', path => {
    console.log(`Datei ${path} entfernt`);
  })
  .on('unlinkDir', path => {
    console.log(`Verzeichnis ${path} entfernt`);
  })
  .on('error', error => {
    console.error('Fehler aufgetreten', error);
  })
  .on('ready', () => {
    console.log(`Initialer Datei-Scan abgeschlossen. Warte ...`);
  });

watcher.on('change', (path, stats) => {
  if (stats) {
    console.log(`Datei ${path} geändert, neue Dateigröße: ${stats.size}`);
  }
});
