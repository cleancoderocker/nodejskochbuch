const faker = require('faker');
faker.locale = 'de';

module.exports = class UserService {
  getAllUsers() {
    const users = [];
    for (let i = 0; i < 10; i++) {
      users.push({
        firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		title: faker.name.jobTitle()
      });
	}
	return users;
  }
};
