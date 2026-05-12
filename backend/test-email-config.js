import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function testEmail() {
  try {
    console.log('Testing email configuration...');
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***' : 'NOT SET');
    console.log('EMAIL_TO:', process.env.EMAIL_TO);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: (process.env.EMAIL_PASS || '').replace(/\s/g, '')
      }
    });

    console.log('\nAttempting to send test email...');
    
    const info = await transporter.sendMail({
      from: `Velicham Preschool & Daycare Website <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: 'Test Email from Velicham Preschool & Daycare - Configuration Check',
      html: `<h2>Test Email</h2>
      <p>If you received this email, the email configuration is working correctly!</p>
      <p>Sent at: ${new Date().toLocaleString()}</p>`
    });

    console.log('✓ Email sent successfully!');
    console.log('Message ID:', info.messageId);
  } catch (err) {
    console.error('✗ Error sending email:');
    console.error('Error Code:', err.code);
    console.error('Error Message:', err.message);
    console.error('Full Error:', err);
  }
}

testEmail();
