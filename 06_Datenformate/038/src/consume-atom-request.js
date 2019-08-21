const FeedParser = require('feedparser');
const request = require('request');

const feedRequest = request('http://javascripthandbuch.de/atom.xml');
const feedparser = new FeedParser();

feedRequest.on('error', (error) => {
  console.error(error);
});

feedRequest.on('response', (response) => {
  if (response.statusCode !== 200) {
    feedRequest.emit('error', new Error('Bad status code'));
  } else {
    feedRequest.pipe(feedparser);
  }
});

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
