const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


const cors = require('cors');

require('dotenv').config()

const port = 8080;


const app = express();

app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));





app.listen(port, () => {

  console.log('We are live on port 8080');
});


app.get("/", (req, res) => {
  res.send("Hello World");
})


app.post("/api/v1", (req,res) => {
  var data = req.body;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD
  }
});

var mailOptions = {
  from:  data.email,
  to: 'shirazipatricia@gmail.com',
  subject: 'HumboldtToGoRequest',
  html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
};

transporter.sendMail(mailOptions,
(error, response) => {
  if(error) {
    res.send(error)
  }else {
    res.send('Success')
  }
  transporter.close();
});

})