const email = {
  from: 'max@nodejskochbuch.de',
  to: 'moritz@nodejskochbuch.de',
  subject: 'Hello World',
  text: 'Hello World',
  html: '<b>Hello world</b>',
  attachments: [
    {
      filename: 'attachment.txt',
      content: 'Hello World'
    },
    {
      path: attachmentPath
    }
  ]
};

transporter.sendMail(email, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Message sent: %s', info.messageId);
  }
});
