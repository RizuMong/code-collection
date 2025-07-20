var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'post-mail.toyota.astra.co.id', 
  port: 25, 
  secure: false, 
  auth: {
    user: "customercare@toyota.astra.co.id",  
    pass: "Concierge12", 
  }
});

var mailOptions = {
  from: '"Lexus Indonesia" <cs@qblstore.com>',
  to: "rizki.haddi@mekari.com",
  subject: "Test Subject",
  text: "Ini adalah pesan", 
  html: "<html><body><h2>Ini adalah email percobaan</h1><p>Pesan dari Lexus Indonesia</p></body></html>", 
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});