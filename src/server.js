const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


const cors = require('cors');

require('dotenv').config()

const port = 8080;


const app = express();


// app.use((request, response, next) => {
//     response.header('Access-Control-Allow-Headers', 'Content-Type');
//     response.header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
//     next();
//   });

app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));





app.listen(port, () => {

  console.log('We are live on port 8080');
});


app.get('/', (req, res) => {
  res.send('hi');
})

// const issue2options = {
//   // origin: true,
//   methods: ["POST"],
//   // credentials: true,
// };

// app.options("/api/v1", cors(issue2options));
app.post('/api/v1', (req,res) => {
  console.log( "post yaaa")

  var data = req.body;

var smtpTransport = nodemailer.createTransport({
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD
  }
});

var mailOptions = {
  from:  data.email,
  to: '0f2a33fe8249a6bf983e@cloudmailin.net',
  subject: 'HumboldtToGoRequest',
  html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
};

smtpTransport.sendMail(mailOptions,
(error, response) => {
  console.log(error, "errorr yaaa")
  if(error) {
    res.send(error)
  }else {
    res.send('Success')
  }
  smtpTransport.close();
});

})