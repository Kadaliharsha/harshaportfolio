import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Configure your email transport (replace with your real credentials)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kadali.hrv@gmail.com', // TODO: Replace with your email
      pass: 'TWD@1540'     // TODO: Replace with your app password
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'your.email@gmail.com', // TODO: Replace with your receiving email
      subject: `Portfolio Contact: ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`
    });
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send email.', error: err });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 