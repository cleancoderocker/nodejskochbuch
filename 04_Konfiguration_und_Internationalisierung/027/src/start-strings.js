const i18n = require('i18n');
const path = require('path');
const directory = path.join(__dirname, '..', 'locales');

i18n.configure({
  locales: ['en', 'de'],
  directory,
  defaultLocale: 'de',
  objectNotation: true
});

console.log(i18n.__('Greeting'));
console.log(i18n.__('Message'));
console.log(i18n.__('Questions.Question1'));
console.log(i18n.__('Questions.Question2'));
