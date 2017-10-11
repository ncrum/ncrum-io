const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.CONTACT_EMAIL,
    pass: process.env.CONTACT_PASS,
  },
});

const app = express();

app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  transporter.sendMail({
    from: req.body.email,
    to: process.env.CONTACT_EMAIL,
    replyTo: req.body.email,
    subject: req.body.subject,
    text: req.body.body,
  }, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).end();
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).end();
    }
  });
});

app.use('/static', express.static(path.join(__dirname, 'dist/static')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
