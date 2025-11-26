import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('Testing email configuration...');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS length:', process.env.EMAIL_PASS?.length);
console.log('EMAIL_TO:', process.env.EMAIL_TO);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const mailOptions = {
  from: `Velicham Test <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_TO,
  subject: 'Test Email from Velicham Backend',
  html: `<h2>Test Email</h2>
  <p>This is a test email to verify the email configuration is working.</p>
  <p>Sent at: ${new Date().toLocaleString()}</p>`
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Email test failed:', error);
  } else {
    console.log('Email test successful:', info.messageId);
  }
});