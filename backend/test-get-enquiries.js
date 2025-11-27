fetch('http://localhost:5000/api/enquiry')
  .then(r => r.json())
  .then(data => {
    console.log('=== ALL ENQUIRIES ===');
    console.log(JSON.stringify(data, null, 2));
    process.exit(0);
  })
  .catch(e => {
    console.error('Error:', e.message);
    process.exit(1);
  });
