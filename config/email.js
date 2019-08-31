const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const xoauth2 = require("xoauth2");
const fs = require("fs");

module.exports = mail = (receiver, description, subject) => {
  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
          user: "sahilshah22269@gmail.com",
          clientId:
            "228320545868-qeg1o4cmqkknn4ikuf904ot15fp6kkri.apps.googleusercontent.com",
          clientSecret: "_x8GfmKhqlRsgjB6TssX5iEQ",
          refreshToken: "1/T5GFb64wOrt_KMVP1YLDUjFecTZmFSdo0yJwOnXrrJU"
        })
      }
    })
  );
  const mailOptions = {
    from: "FITHUB <sahilshah22269@gmail.com>",
    to: receiver,
    subject: subject,
    text: description
    // attachment: {
    //   filename: "text4.txt",
    //   content: fs.createReadStream("file.txt")
    // }
  };

  transporter.sendMail(mailOptions, (err, res) => {
    if (err) throw err;
    console.log(`email sent ${res}`);
  });
};
