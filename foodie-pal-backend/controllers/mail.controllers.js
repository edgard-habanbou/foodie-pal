const nodemailer = require("nodemailer");

const sendMail = async (email, subject, message, res) => {
  if (!email || !subject || !message) {
    res.status(400).send({ message: "all fields are required" });
    return;
  }
  const EmailAddress = process.env.EMAIL_ADDRESS;
  const EmailPassword = process.env.EMAIL_PASSWORD;
  try {
    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: EmailAddress,
        pass: EmailPassword,
      },
    });
    const mailOptions = {
      from: "devtest1232023@outlook.com",
      to: email,
      subject: subject,
      text: message,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: "email sent successfully" });
  } catch (err) {
    res.status(500).send({ message: "something went wrong" });
  }
};

module.exports = {
  sendMail,
};
