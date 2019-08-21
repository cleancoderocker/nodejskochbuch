const builder = require('xmlbuilder');

const feedObject = {
  feed: {
    '@xmlns': 'http://www.w3.org/2005/Atom',
    title: { '@type': 'text', '#text': 'Hello World' },
    subtitle: {
      '@type': 'html',
      '#text': 'Example for generating a news feed with Node.js'
    },
    updated: '2018-11-05T12:00:00Z',
    id: 'tag:nodejskochbuch.de,2018:11',
    link: [
      {
        '@rel': 'alternate',
        '@type': 'text/html',
        '@hreflang': 'en',
        '@href': 'http://nodejskochbuch.de/'
      },
      {
        '@rel': 'self',
        '@type': 'application/atom+xml',
        '@href': 'http://nodejskochbuch.de/feed.atom'
      }
    ],
    rights: 'Copyright (c) 2018, Philip Ackermann',
    generator: {
      '@uri': 'http://www.example.com/',
      '@version': '1.0',
      '#text': 'Example RSS Generator'
    },
    entry: {
      title: 'Atom draft-07 snapshot',
      link: [
        {
          '@rel': 'alternate',
          '@type': 'text/html',
          '@href': 'http://nodejskochbuch.de/2018/11/05/atom'
        },
        {
          '@rel': 'enclosure',
          '@type': 'audio/mpeg',
          '@length': '1337',
          '@href': 'http://nodejskochbuch.de/audio/someFile.mp3'
        }
      ],
      id: 'tag:nodejskochbuch.de,2003:3.2397',
      updated: '2018-11-05T12:00:00Z',
      published: '2018-11-05T12:00:00Z',
      author: {
        name: 'Philip Ackermann',
        uri: 'http://philipackermann.de/',
        email: 'info@philipackermann.de'
      },
      rights: 'Copyright (c) 2018, Philip Ackermann',
      contributor: [{ name: 'Philip Ackermann' }],
      content: {
        '@type': 'xhtml',
        '@xml:lang': 'en',
        '@xml:base': 'http://nodejskochbuch.de/',
        div: {
          '@xmlns': 'http://www.w3.org/1999/xhtml',
          p: {
            b: 'Hello World'
          }
        }
      }
    }
  }
};

const feed = builder
  .create(feedObject, { encoding: 'utf-8' })
  .end({ pretty: true });

console.log(feed);
