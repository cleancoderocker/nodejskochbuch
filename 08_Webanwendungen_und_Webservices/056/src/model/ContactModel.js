const contacts = new Map();
contacts.set('1', {
  firstName: 'Max',
  lastName: 'Mustermann'
});
contacts.set('2', {
  firstName: 'Moritz',
  lastName: 'Mustermann'
});

module.exports = class ContactModel {
  static getContacts() {
    const contactsArray = [];
    for (let [id, contact] of contacts) {
      contactsArray.push({
        ...contact,
        id
      });
    }
    return contactsArray;
  }

  static findContact(id) {
    const contact = contacts.get(id);
    return contact;
  }

  static addContact(id, newContact) {
    const contains = contacts.get(id);
    if (!contains) {
      contacts.set(id, newContact);
      return newContact;
    } else {
      throw new Error('Contact already exists.');
    }
  }

  static updateContact(id, updatedContact) {
    const contains = contacts.get(id);
    if (contains) {
      contacts.set(id, updatedContact);
      return updatedContact;
    } else {
      throw new Error('Contact does not exist.');
    }
  }

  static deleteContact(id) {
    const deleted = contacts.delete(id);
    if (deleted) {
      return contact;
    } else {
      throw new Error('Contact not found.');
    }
  }
};
