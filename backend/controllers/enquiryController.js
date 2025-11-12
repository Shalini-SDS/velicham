import nodemailer from 'nodemailer';

export async function sendEnquiry(req, res) {
  const { name, email, phone, message, childName, age } = req.body || {};
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'name, email and phone are required' });
  }
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const info = await transporter.sendMail({
      from: `Velicham Website <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: 'New Enquiry from Velicham Website',
      html: `<h2>New Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Child:</strong> ${childName || '-'} (${age || '-'})</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message || '-'}</p>`
    });

    return res.json({ success: true, id: info.messageId });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}

