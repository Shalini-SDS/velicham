import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function getEnquiries(req, res) {
  try {
    const enquiriesDir = path.join(process.cwd(), 'enquiries');
    
    if (!fs.existsSync(enquiriesDir)) {
      return res.json({ success: true, enquiries: [], total: 0 });
    }
    
    const files = fs.readdirSync(enquiriesDir)
      .filter(f => f.endsWith('.json') && !f.startsWith('enquiry_error'))
      .sort()
      .reverse();
    
    const enquiries = files.map(file => {
      try {
        const content = fs.readFileSync(path.join(enquiriesDir, file), 'utf8');
        return JSON.parse(content);
      } catch (e) {
        console.error('Error reading enquiry file:', file, e.message);
        return null;
      }
    }).filter(e => e !== null);
    
    res.json({ 
      success: true, 
      enquiries,
      total: enquiries.length,
      unread: enquiries.filter(e => !e.read).length
    });
  } catch (err) {
    console.error('Error fetching enquiries:', err.message);
    res.status(500).json({ error: 'Failed to fetch enquiries' });
  }
}

export async function getEnquiryStats(req, res) {
  try {
    const enquiriesDir = path.join(process.cwd(), 'enquiries');
    
    if (!fs.existsSync(enquiriesDir)) {
      return res.json({ 
        success: true, 
        stats: { total: 0, sent: 0, failed: 0, pending: 0 }
      });
    }
    
    const files = fs.readdirSync(enquiriesDir)
      .filter(f => f.endsWith('.json'));
    
    const stats = {
      total: 0,
      sent: 0,
      failed: 0,
      failed_no_credentials: 0,
      pending: 0,
      disabled: 0
    };
    
    files.forEach(file => {
      try {
        const content = fs.readFileSync(path.join(enquiriesDir, file), 'utf8');
        const data = JSON.parse(content);
        stats.total++;
        stats[data.emailStatus]++;
      } catch (e) {
        console.error('Error reading file:', file);
      }
    });
    
    res.json({ success: true, stats });
  } catch (err) {
    console.error('Error fetching stats:', err.message);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
}

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
    message,
    emailStatus: 'pending'
  };
  
  try {
    const enquiryFile = path.join(enquiriesDir, `enquiry_${Date.now()}.json`);
    fs.writeFileSync(enquiryFile, JSON.stringify(enquiryData, null, 2));
    
    console.log('✓ Enquiry saved to file:', enquiryFile);
    
    if (process.env.EMAIL_ENABLED !== 'false') {
      const toAddress = process.env.EMAIL_TO || 'vdps2k25@gmail.com';
      
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('✗ Email credentials missing - EMAIL_USER or EMAIL_PASS not set');
        enquiryData.emailStatus = 'failed_no_credentials';
        fs.writeFileSync(enquiryFile, JSON.stringify(enquiryData, null, 2));
        return res.status(200).json({ 
          success: true, 
          message: 'Enquiry saved but email not sent - missing credentials',
          emailSent: false
        });
      }
      
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      console.log('Attempting to send email to:', toAddress, 'from:', process.env.EMAIL_USER);

      const info = await transporter.sendMail({
        from: `Velicham Website <${process.env.EMAIL_USER}>`,
        to: toAddress,
        subject: 'New Enquiry from Velicham Website',
        html: `<h2>New Enquiry Received</h2>
        <p><strong>Parent Name:</strong> ${name}</p>
        <p><strong>Child Name:</strong> ${childName || '-'}</p>
        <p><strong>Child Age:</strong> ${age || '-'}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Message:</strong><br/>${(message || '-').replace(/\n/g, '<br>')}</p>
        <hr/>
        <p style="font-size: 12px; color: #666;">Sent on: ${new Date().toLocaleString()}</p>`
      });

      enquiryData.emailStatus = 'sent';
      enquiryData.emailId = info.messageId;
      fs.writeFileSync(enquiryFile, JSON.stringify(enquiryData, null, 2));
      
      console.log('✓ Email sent successfully:', info.messageId);
      return res.json({ success: true, message: 'Enquiry received and email sent', emailSent: true });
    } else {
      console.log('EMAIL_ENABLED is false - skipping email');
      enquiryData.emailStatus = 'disabled';
      fs.writeFileSync(enquiryFile, JSON.stringify(enquiryData, null, 2));
      return res.json({ success: true, message: 'Enquiry received (email disabled)', emailSent: false });
    }
  } catch (err) {
    console.error('✗ Error processing enquiry:', err.message);
    console.error('Full error:', err.stack);
    
    const errorFile = path.join(enquiriesDir, `enquiry_error_${Date.now()}.json`);
    enquiryData.emailStatus = 'failed_error';
    enquiryData.error = err.message;
    fs.writeFileSync(errorFile, JSON.stringify(enquiryData, null, 2));
    
    return res.status(200).json({ 
      success: true, 
      message: 'Enquiry saved but email failed to send',
      emailSent: false,
      error: err.message
    });
  }
}

