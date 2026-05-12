import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function handleCompetitionEnrollment(req, res) {
  const { name, email, phone, childName, childAge } = req.body || {};
  if (!name || !email || !phone || !childName || !childAge) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const competitionsDir = path.join(process.cwd(), 'competitions');
  if (!fs.existsSync(competitionsDir)) {
    fs.mkdirSync(competitionsDir, { recursive: true });
  }

  const enrollmentData = {
    timestamp: new Date().toISOString(),
    name,
    email,
    phone,
    childName,
    childAge,
    competition: 'First Competition - Dec 7th'
  };

  try {
    fs.writeFileSync(
      path.join(competitionsDir, `competition_enrollment_${Date.now()}.json`),
      JSON.stringify(enrollmentData, null, 2)
    );

    console.log('Competition enrollment saved to file:', competitionsDir);

    if (true) { // Enable email sending
      const toAddress = process.env.EMAIL_TO || 'vdps2k25@gmail.com';

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      console.log('Attempting to send competition enrollment email to:', toAddress);

      const info = await transporter.sendMail({
        from: `Velicham Preschool & Daycare Website <${process.env.EMAIL_USER}>`,
        to: toAddress,
        subject: 'New Competition Enrollment from Velicham Preschool & Daycare Website',
        html: `<h2>New Competition Enrollment</h2>
        <p><strong>Competition:</strong> First Competition - Dec 7th</p>
        <p><strong>Parent Name:</strong> ${name}</p>
        <p><strong>Child Name:</strong> ${childName}</p>
        <p><strong>Child Age:</strong> ${childAge}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Enrollment Date:</strong> ${new Date().toLocaleString()}</p>`
      });

      console.log('Competition enrollment email sent successfully:', info.messageId);
      enrollmentData.emailId = info.messageId;
    }

    return res.json({ success: true, message: 'Competition enrollment received successfully' });
  } catch (err) {
    console.error('Error processing competition enrollment:', err.message);
    console.error('Full error:', err.stack);
    return res.json({ success: true, message: 'Competition enrollment received and saved' });
  }
}