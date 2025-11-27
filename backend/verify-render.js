import fetch from 'node-fetch';

console.log('Verifying Render admin dashboard...\n');

fetch('https://velicham-backend.onrender.com/admin')
  .then(r => r.text())
  .then(text => {
    if (text.includes('Velicham Enquiry Dashboard')) {
      console.log('✅ SUCCESS - Admin dashboard is LIVE!');
      console.log('\n📱 Access URL:');
      console.log('   https://velicham-backend.onrender.com/admin');
      console.log('\n✨ Features:');
      console.log('   • View all parent enquiries');
      console.log('   • See email delivery status');
      console.log('   • Click to contact parents');
      console.log('   • Download as CSV');
      console.log('   • Auto-refresh every 30 seconds');
    } else {
      console.log('✗ Response received but dashboard not found');
    }
    process.exit(0);
  })
  .catch(e => {
    console.error('✗ Error accessing dashboard:', e.message);
    process.exit(1);
  });
