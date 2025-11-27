import fetch from 'node-fetch';

console.log('Testing admin dashboard route...\n');

setTimeout(async () => {
  try {
    const response = await fetch('http://localhost:5000/admin');
    const html = await response.text();
    
    if (html.includes('Velicham Enquiry Dashboard')) {
      console.log('✓ Admin dashboard accessible at: http://localhost:5000/admin');
      console.log('✓ HTML content found, size:', html.length, 'bytes');
      console.log('\n✅ SUCCESS - Admin dashboard is served correctly!');
    } else {
      console.log('✗ Admin dashboard found but content mismatch');
    }
  } catch (error) {
    console.error('✗ Error:', error.message);
  }
  process.exit(0);
}, 2000);
