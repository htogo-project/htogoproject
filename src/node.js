
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'shirazipatricia@gmail.com',
           pass: 'K3z11hy7'
       }
   });