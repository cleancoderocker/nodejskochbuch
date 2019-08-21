const ContactModel = require('../model/ContactModel');

module.exports = class ContactRoute {
  static getContacts(request, response) {
    const contactsArray = ContactModel.getContacts();
    response.send(contactsArray);
  }

  static findContact(request, response) {
    const { id } = request.params;
    const contact = ContactModel.findContact(id);
    if (contact) {
      response.send(contact);
    } else {
      response.status(404).send('Contact not found.');
    }
  }

  static addContact(request, response) {
    const { id } = request.body;
    const newContact = { ...request.body };
    delete newContact.id;
    try {
      ContactModel.addContact(id, newContact);
      response.send(newContact);
    } catch (error) {
      response.status(409).send(error);
    }
  }

  static updateContact(request, response) {
    const { id } = request.params;
    const updatedContact = { ...request.body };
    delete updatedContact.id;
    ContactModel.updateContact(id, updatedContact);
    response.send(updatedContact);
  }

  static deleteContact(request, response) {
    const { id } = request.params;
    const contact = contacts.get(id);
    const deleted = contacts.delete(id);
    if (deleted) {
      response.send(contact);
    } else {
      response.status(404).send('Contact not found.');
    }
  }
};
