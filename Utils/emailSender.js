const nodemailer = require("nodemailer");

exports.sendMail = async (option) => {
  //Create a transporter object
  let transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `${option.name} <${option.email}>`,
    to: "ekottmfon@gmail.com",
    subject: `Conatct Us Form- ${option.subject}`,
    html: option.message,
  };

  await transport.sendMail(mailOptions);
};
