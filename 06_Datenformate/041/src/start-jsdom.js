const jsdom = require('jsdom');
const UserService = require('./UserService');
const { JSDOM } = jsdom;

const service = new UserService();

const dom = new JSDOM('<!DOCTYPE html>');
const document = dom.window.document;
const title = document.createElement('title');
title.textContent = 'Users';
document.head.appendChild(title);
const headline = document.createElement('h1');
headline.textContent = 'Users';
document.body.appendChild(headline);

/**
 * Helferfunktion für das Erstellen
 * einer Tabellenzeile.
 * @param {Array} columns 
 * @param {String} columnTag 
 */
const createTableRow = (columns, columnTag = 'td') => {
  const tableRow = document.createElement('tr');
  columns.forEach(column => {
    const tableColumn = document.createElement(columnTag);
    tableColumn.textContent = column;
    tableRow.appendChild(tableColumn);
  });
  return tableRow;
};

/**
 * Helferfunktion für das Erstellen
 * einer Tabellenüberschriftzeile.
 * @param {Array} columns 
 */
const createTableHeaderRow = columns => createTableRow(columns, 'th');

const table = document.createElement('table');
const tableHeaderRow = createTableHeaderRow(['First Name', 'Last Name', 'Title']);
table.appendChild(tableHeaderRow);

service.getAllUsers().forEach(user => {
  const tableRow = createTableRow([user.firstName, user.lastName, user.title]);
  table.appendChild(tableRow);
});

document.body.appendChild(table);

const html = dom.serialize();
console.log(html);
