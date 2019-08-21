const FeedParser = require('feedparser');
const fs = require('fs');
const path = require('path');

const INPUT = path.join(__dirname, 'input-atom.xml');

// Eingabedaten als Stream einlesen
const feedStream = fs.createReadStream(INPUT);

feedStream.on('error', (error) => {
  console.error(error);
});

// Feed-Parser konfigurieren
const feedparser = new FeedParser();

feedparser.on('error', (error) => {
  console.error(error);
});

feedparser.on('readable', () => {
  const meta = feedparser.meta;
  let item;

  while ((item = feedparser.read())) {
    console.log(item.title);
    console.log(item.description);
    console.log(item.link);
    console.log(item.xmlurl);
    console.log(item.date);
    console.log(item.pubdate);
    console.log(item.author);
    console.log(item.language);
    console.log(item.image);
    console.log(item.favicon);
    console.log(item.copyright);
    console.log(item.generator);
    console.log(item.categories);
  }
});

// Eingabe-Stream an Feed-Parser weiterleiten
feedStream.pipe(feedparser);