const { EVENTS, REQUESTS } = require('./Protocol');

module.exports = class MessageFactory {
  static createStartRequest(artist, song) {
    return {
      meta: {
        type: REQUESTS.START_SONG
      },
      body: {
        artist,
        song
      }
    };
  }

  static createStartedEvent(artist, song) {
    return {
      meta: {
        type: EVENTS.STARTED_SONG
      },
      body: {
        artist,
        song
      }
    };
  }
};
