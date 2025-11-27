const enquiry = {
  name: "Test Parent",
  email: "test@example.com",
  phone: "9876543210",
  childName: "Test Child",
  age: "5",
  message: "This is a test enquiry message"
};

fetch('http://localhost:5000/api/enquiry', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(enquiry)
})
.then(r => r.json())
.then(data => {
  console.log('Response:', JSON.stringify(data, null, 2));
  process.exit(0);
})
.catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
