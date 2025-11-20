const mongoose = require('mongoose');
const EnquirySchema = new mongoose.Schema({
  parentName: String,
  childName: String,
  age: String,
  phone: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Enquiry', EnquirySchema);
