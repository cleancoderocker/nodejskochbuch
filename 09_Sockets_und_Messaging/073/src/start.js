const nodemailer = require('nodemailer');

// 1.) Transport definieren
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
	user: '<USER>',     // entsprechend ersetzen
	pass: '<PASSWORD>'  // entsprechend ersetzen
  }
});

// 2.) E-Mail konfigurieren
const email = {
  from: 'max@nodejskochbuch.de',
  to: 'moritz@nodejskochbuch.de',
  subject: 'Hello World',
  text: 'Hello World',
  html: '<b>Hello world</b>'
};

// 3.) E-Mail versenden
transporter.sendMail(email, (error, info) => {
  if (error) {
	console.error(error);
  } else {
	console.log('Message sent: %s', info.messageId);
  }
});