const NAME = 'musicplayer';

const EVENTS = {
  STARTED_SONG: 'started_song',
  PAUSED_SONG: 'paused_song',
  STOPPED_SONG: 'stopped_song'
};

const REQUESTS = {
  START_SONG: 'start_song',
  PAUSE_SONG: 'pause_song',
  STOP_SONG: 'stop_song'
};

module.exports = {
  NAME,
  EVENTS,
  REQUESTS
};
