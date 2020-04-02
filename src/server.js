const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const credentials = require('/credentials')
const port = 8080;


const app = express();

app.use(cors());

// app.use((request, response, next) => {
//     response.header('Access-Control-Allow-Headers', 'Content-Type');
//     response.header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
//     next();
//   });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.listen(port, () => {
  console.log('We are live on port 8080');
});


app.get('/', (req, res) => {
  res.send('hi');
})

const issue2options = {
  // origin: true,
  methods: ["POST"],
  // credentials: true,
};

app.options("/issue-2", cors(issue2options));
app.post("/issue-2", cors(issue2options), (req,res) => {
  console.info("POST /issue-2");

  var data = req.body;

var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
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