import fetch from 'node-fetch';

async function testAPI() {
  try {
    console.log('Testing basic server connection...');

    // First test basic connection
    const basicResponse = await fetch('http://localhost:5000');
    console.log('Basic response status:', basicResponse.status);

    console.log('Testing competition enrollment API...');

    const response = await fetch('http://localhost:5000/api/competition/enrollment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        phone: '1234567890',
        childName: 'Test Child',
        childAge: '5'
      })
    });

    const result = await response.text(); // Use text() instead of json() to see raw response
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers));
    console.log('Response body:', result);

  } catch (error) {
    console.error('Error testing API:', error.message);
    console.error('Error details:', error);
  }
}

testAPI();