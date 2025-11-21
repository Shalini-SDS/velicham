import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function sendEnquiry(req, res) {
  const { name, email, phone, message, childName, age } = req.body || {};
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'name, email and phone are required' });
  }
  
  const enquiriesDir = path.join(process.cwd(), 'enquiries');
  if (!fs.existsSync(enquiriesDir)) {
    fs.mkdirSync(enquiriesDir, { recursive: true });
  }
  
  const enquiryData = {
    timestamp: new Date().toISOString(),
    name,
    email,
    phone,
    childName,
    age,
    message
  };
  
  try {
    fs.writeFileSync(
      path.join(enquiriesDir, `enquiry_${Date.now()}.json`),
      JSON.stringify(enquiryData, null, 2)
    );
    
    console.log('Enquiry saved to file:', enquiriesDir);
    
    if (process.env.EMAIL_ENABLED !== 'false') {
      const toAddress = process.env.EMAIL_TO || 'vdps2k25@gmail.com';
      
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      console.log('Attempting to send email to:', toAddress);

      const info = await transporter.sendMail({
        from: `Velicham Website <${process.env.EMAIL_USER}>`,
        to: toAddress,
        subject: 'New Enquiry from Velicham Website',
        html: `<h2>New Enquiry</h2>
        <p><strong>Parent Name:</strong> ${name}</p>
        <p><strong>Child Name:</strong> ${childName || '-'}</p>
        <p><strong>Child Age:</strong> ${age || '-'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message || '-'}</p>`
      });

      console.log('Email sent successfully:', info.messageId);
      enquiryData.emailId = info.messageId;
    }

    return res.json({ success: true, message: 'Enquiry received successfully' });
  } catch (err) {
    console.error('Error processing enquiry:', err.message);
    return res.json({ success: true, message: 'Enquiry received and saved' });
  }
}

