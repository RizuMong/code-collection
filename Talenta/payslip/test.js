import nodemailer from 'nodemailer';

export const code = async (inputs) => {
  const transporter = nodemailer.createTransport({
    host: 'post-mail.toyota.astra.co.id', 
    port: 25, 
    secure: false, 
    auth: {
      user: "customercare@toyota.astra.co.id",  
      pass: "Concierge12", 
    }
  });

  const mailOptions = {
    from: '"GWM Inchcape Retail Indonesia" <gwm_igri@InchcapeUK.mail.onmicrosoft.com>',
    to: "rizki.haddi@mekari.com", 
    subject: "Test Subject",  
    text: "Ini adalah pesan",
    html: "<html><body><h1>Ini adalah email percobaan</h1><p>Pesan dari Ridwan Kamil</p></body></html>",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, message: `Message sent: ${info.messageId}` };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
