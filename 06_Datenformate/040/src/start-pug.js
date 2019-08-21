const pug = require('pug');
const path = require('path');
const UserService = require('./UserService');

const INPUT = path.join(__dirname, '..', 'data', 'index.pug');

const service = new UserService();

const html = pug.renderFile(INPUT, {
  title: 'Users',
  users: service.getAllUsers()
});
console.log(html);
