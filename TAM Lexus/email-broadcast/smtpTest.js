var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: "customercare@toyota.astra.co.id",
    pass: "wcwgfgzmrsxmwhpc"
  }
});

var mailOptions = {
  from: '"Lexus Indonesia" <customercare@toyota.astra.co.id>',
  to: "rizki.haddi@mekari.com",
  // cc: "rizkiyoga177@gmail.com, daffa.addien@mekari.com",
  subject: "Test Subject",
  text: "Ini adalah pesan", 
  attachments: [
    {
      filename: 'gambar.png',
      path: 'https://officeless-files-1jrxrmbq.s3.ap-southeast-3.amazonaws.com/230/672478f6b12a1-Footer-JNE.png',
    },
    // {
    //   filename: 'gambar.jpg',
    //   path: 'https://officeless-files-1jrxrmbq.s3.ap-southeast-3.amazonaws.com/230/67245c6fa8748-Logo-JNE-Express.png',
    // },
  ],
  html: `
  <html lang="en">
  <head>
    <title>After Sales</title>
    <style>
      .w-full {
        width: 100%;
      }

      .w-3 {
        width: 30%;
      }

      .h-8 {
        height: 36px;
      }

      .pl-2 {
        padding-left: 8px;
      }

      .font-semibold {
        font-weight: 600;
      }

      .mt-10 {
        margin-top: 40px;
      }

      table,
      th,
      td {
        border: 1px solid black;
        border-collapse: collapse;
      }

      body {
        font-family: "Calibri", sans-serif;
      }
    </style>
  </head>
  <body>
    <div class="w-full">
      <p>Dear [Nama Receiver],</p>
      <p class="mt-10">Berikut kami sampaikan informasi [TYPE] INQUIRY [DEALER] yang masuk melalui Concierge Center Lexus 
        Indonesia:</p>
    </div>
    <table class="w-full">
      <tr class="h-8">
        <td class="w-3 pl-2">Date</td>
        <td class="pl-2"></td>
      </tr>
      <tr class="h-8">
        <td class="w-3 pl-2">Name</td>
        <td class="pl-2"></td>
      </tr>
      <tr class="h-8">
        <td class="w-3 pl-2">Domicile</td>
        <td class="pl-2"></td>
      </tr>
      <tr class="h-8">
        <td class="w-3 pl-2">Phone Number</td>
        <td class="pl-2"></td>
      </tr>
      <tr class="h-8">
        <td class="w-3 pl-2">Email</td>
        <td class="pl-2"></td>
      </tr>
      <tr class="h-8">
        <td class="w-3 pl-2">Inquiry</td>
        <td class="pl-2"></td>
      </tr>
      <tr class="h-8">
        <td class="w-3 pl-2">Detail</td>
        <td class="pl-2"></td>
      </tr>
      <tr class="h-8">
        <td class="w-3 pl-2">Dealer</td>
        <td class="pl-2"></td>
      </tr>
      <tr class="h-8">
        <td class="w-3 pl-2">PIC</td>
        <td class="pl-2"></td>
      </tr>
    </table>
    <div>
      <p>
        Demikian informasi yang dapat saya sampaikan, atas perhatiannya saya ucapkan terima kasih.
      </p>
    </div>
    <div class="mt-10">
      <p>Best regards,</p>
      <p>Lexus Concierge Center</p>
    </div>
  </body>
</html>
  `, 
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});