const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const credentials = require('/credentials')

const app = express();

const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log('We are live on port 8080');
});


app.get('/', (req, res) => {
  res.send('hi');
})

app.post('/api/v1', (req,res) => {
  var data = req.body;

var smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  port: 465,
  auth: {
    user: credentials.password,
    pass: credentials.username
  }
});

var mailOptions = {
  from: data.email,
  to: 'shirazipatricia@gmail.com',
  subject: 'HumboldtToGoRequest',
  html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
};

smtpTransport.sendMail(mailOptions,
(error, response) => {
  if(error) {
    res.send(error)
  }else {
    res.send('Success')
  }
  smtpTransport.close();
});

})