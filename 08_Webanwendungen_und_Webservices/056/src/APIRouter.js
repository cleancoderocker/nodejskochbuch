const { Router } = require('express');
const ContactRoute = require('./routes/ContactRoute');

module.exports = class APIRouter extends Router {
  constructor(opts = APIRouter.defaultOptions()) {
    super(opts);
    this.get(
      '/',
      (request, response) =>
        response.json({
          name: 'Contact API',
          version: '1'
        })
    );
    this.get(
      '/contacts',
      ContactRoute.getContacts
    );
    this.get(
      '/contacts/:id',
      ContactRoute.findContact
    );
    this.post(
      '/contacts',
      ContactRoute.addContact
    );
    this.put(
      '/contacts/:id',
      ContactRoute.updateContact
    );
    this.delete(
      '/contacts/:id',
      ContactRoute.deleteContact
    );
  }

  static defaultOptions() {
    return {
      caseSensitive: true,
      strict: true
    };
  }
};
