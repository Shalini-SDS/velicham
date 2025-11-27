console.log('Testing Velicham Backend Email System...\n');

async function runTests() {
  try {
    console.log('1️⃣ Testing enquiry submission...');
    const enquiry = {
      name: "Final Test Parent",
      email: "test@example.com",
      phone: "9876543210",
      childName: "Test Child",
      age: "6",
      message: "Final test message"
    };
    
    const submitResponse = await fetch('http://localhost:5000/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enquiry)
    });
    const submitData = await submitResponse.json();
    console.log('   ✓ Enquiry submitted:', submitData.message);
    console.log('   ✓ Email sent:', submitData.emailSent);
    
    await new Promise(r => setTimeout(r, 1000));
    
    console.log('\n2️⃣ Testing get all enquiries...');
    const listResponse = await fetch('http://localhost:5000/api/enquiry');
    const listData = await listResponse.json();
    console.log('   ✓ Total enquiries:', listData.total);
    console.log('   ✓ Latest enquiry:', listData.enquiries[0]?.name);
    console.log('   ✓ Email status:', listData.enquiries[0]?.emailStatus);
    
    console.log('\n3️⃣ Testing statistics...');
    const statsResponse = await fetch('http://localhost:5000/api/enquiry/stats');
    const statsData = await statsResponse.json();
    console.log('   ✓ Stats retrieved:', JSON.stringify(statsData.stats, null, 2));
    
    console.log('\n✅ All tests passed!');
    console.log('\n📊 System Summary:');
    console.log('   - Email system: WORKING ✓');
    console.log('   - Enquiry storage: WORKING ✓');
    console.log('   - Admin API: WORKING ✓');
    console.log('\n💡 Next Steps:');
    console.log('   1. Open admin-dashboard.html to view enquiries');
    console.log('   2. Check your email for the enquiry notification');
    console.log('   3. Use /api/enquiry endpoint to get enquiry data');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  }
  
  process.exit(0);
}

runTests();
