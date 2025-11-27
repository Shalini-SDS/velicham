# Email System & Enquiry Management Guide

## Problem Identified

The email notification system to admin (vdps2k25@gmail.com) was not working reliably. User enquiries were not being received in the admin email, despite having email configuration setup.

## Solutions Implemented

### 1. **Improved Email Handling**
- Added comprehensive error logging to identify email failures
- Added email status tracking in each enquiry record (`emailStatus` field)
- Implemented credential validation before attempting to send
- Better error messages for debugging

### 2. **Fallback Storage System**
- All enquiries are ALWAYS saved to local files (`enquiries/enquiry_*.json`)
- Email failures do NOT result in data loss
- Each enquiry has an `emailStatus` field showing: `sent`, `failed_error`, `failed_no_credentials`, `pending`, or `disabled`

### 3. **New Admin APIs**
Created three endpoints to view enquiries without relying on email:

#### GET /api/enquiry
Returns all stored enquiries with metadata
```json
{
  "success": true,
  "enquiries": [...],
  "total": 15,
  "unread": 12
}
```

#### GET /api/enquiry/stats
Returns email delivery statistics
```json
{
  "success": true,
  "stats": {
    "total": 15,
    "sent": 10,
    "failed": 2,
    "failed_no_credentials": 0,
    "pending": 3
  }
}
```

#### POST /api/enquiry
Submits a new enquiry
- Required fields: `name`, `email`, `phone`
- Optional fields: `childName`, `age`, `message`

## How to Access Enquiries

### Option 1: Admin Dashboard (Recommended)
1. Open `backend/admin-dashboard.html` in your browser
2. View all enquiries with status indicators
3. Click email/phone links to contact parents
4. Download enquiries as CSV

### Option 2: Direct File Access
All enquiries are stored in `backend/enquiries/` directory as JSON files:
```
enquiries/
├── enquiry_1764223582557.json
├── enquiry_1763738313952.json
└── ...
```

### Option 3: API Calls
Use the REST API endpoints:
```bash
# Get all enquiries
curl http://localhost:5000/api/enquiry

# Get statistics
curl http://localhost:5000/api/enquiry/stats
```

## Email Configuration

### Current Setup (.env)
```
EMAIL_ENABLED=true
EMAIL_USER=vdps2k25@gmail.com
EMAIL_PASS=cshb eiyb qckb cvpm
EMAIL_TO=vdps2k25@gmail.com
PORT=5000
```

### If Emails Still Not Arriving:

1. **Check Gmail Settings**
   - Make sure "Less secure app access" is DISABLED (not needed for app passwords)
   - Use Gmail "App Passwords" (not regular password)
   - The EMAIL_PASS should be 16 characters without spaces

2. **Verify Credentials**
   - Run: `node test-email.js` to send a test email
   - Check console output for detailed error messages

3. **Check Email Folder**
   - Look in Gmail Spam/Promotions folder
   - Check Gmail filters for blocking the sender

4. **Enable Debug Logging**
   - Check backend console output when enquiries are submitted
   - Look for "✓ Email sent successfully" or error messages
   - Error details help diagnose the issue

## Testing

### Send Test Email
```bash
node test-email.js
```

### Submit Test Enquiry
```bash
node test-enquiry-api.js
```

### View All Enquiries via API
```bash
node test-get-enquiries.js
```

### View Statistics
```bash
node test-stats.js
```

## Data Backup

Enquiries are automatically saved locally, but for safety:

1. **Manual Backup**
   ```bash
   # Backup enquiries to CSV using dashboard or:
   cp -r enquiries/ enquiries-backup-$(date +%Y%m%d)/
   ```

2. **Automatic Backup**
   - Consider running a cron job to backup the enquiries directory

3. **CSV Export**
   - Use the admin dashboard's "Download as CSV" button
   - Or process the JSON files directly

## Troubleshooting

### Email Not Sending?
1. Check server console for error messages (look for ✗)
2. Verify .env file has correct credentials
3. Check Gmail app password is 16-character code
4. Ensure EMAIL_ENABLED=true in .env
5. Verify EMAIL_TO address is correct

### Can't Access Admin Dashboard?
1. Make sure backend server is running: `npm run dev`
2. Server should be running on port 5000 (check .env)
3. Try opening: `http://localhost:5000/api/enquiry` in browser
4. Should see JSON list of enquiries

### Missing Enquiries?
1. Check `backend/enquiries/` directory exists
2. Look for JSON files with correct timestamps
3. Check file permissions - directory should be readable

## Email Status Explanations

| Status | Meaning | Action |
|--------|---------|--------|
| `sent` | Email delivered to Gmail successfully | ✓ Check admin inbox |
| `failed_no_credentials` | EMAIL_USER or EMAIL_PASS not configured | Fix .env file |
| `failed_error` | Email service error (network, auth, etc) | Check .env and Gmail settings |
| `pending` | Not attempted yet | Check if EMAIL_ENABLED=false |
| `disabled` | EMAIL_ENABLED=false in .env | Change to true to enable |

## Integration with Frontend

### Send Enquiry from Frontend
```javascript
const enquiry = {
  name: "Parent Name",
  email: "parent@email.com",
  phone: "1234567890",
  childName: "Child Name",
  age: "5",
  message: "Optional message"
};

fetch('/api/enquiry', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(enquiry)
})
.then(r => r.json())
.then(data => console.log(data))
```

### Check Enquiry Status
```javascript
fetch('/api/enquiry')
  .then(r => r.json())
  .then(data => {
    console.log(`Total enquiries: ${data.total}`);
    console.log(`Unread: ${data.unread}`);
    data.enquiries.forEach(e => {
      console.log(`${e.name}: ${e.emailStatus}`);
    });
  });
```

## Best Practices

1. **Monitor Email Status**
   - Regularly check admin dashboard
   - Monitor `/api/enquiry/stats` for failures
   - Fix any persistent email issues

2. **Keep Backups**
   - Regularly download enquiries as CSV
   - Keep git history of changes
   - Archive old enquiries periodically

3. **Respond to Enquiries**
   - Use contact info to reach out to parents
   - Mark enquiries as read when contacted

4. **Update Email Credentials**
   - If Gmail password changes, update .env
   - Never commit .env to git (it's already in .gitignore)

## Security Notes

- ⚠️ Keep `.env` file secret - never commit to git
- ⚠️ Use Gmail App Password (16-char code), not actual Gmail password
- ⚠️ The admin-dashboard.html is for local use - not meant for production web access
- ⚠️ Consider adding authentication before deploying API publicly

---

Last Updated: 2025-11-27
