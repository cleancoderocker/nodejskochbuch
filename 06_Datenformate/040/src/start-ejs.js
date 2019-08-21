const ejs = require('ejs');
const path = require('path');
const UserService = require('./UserService');

const INPUT = path.join(__dirname, '..', 'data', 'index.ejs');

const service = new UserService();

ejs.renderFile(
  INPUT,
  {
    title: 'Users',
    users: service.getAllUsers()
  },
  (error, html) => {
    console.log(html);
  }
);
