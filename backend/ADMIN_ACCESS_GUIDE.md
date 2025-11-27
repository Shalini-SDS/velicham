# How to Access Admin Dashboard (After Publishing)

## 🎯 Access Methods

### Method 1: Via Web URL (Recommended - After Publishing)
Once your backend is deployed, access the admin dashboard at:

```
http://yourdomain.com/admin
```

**Example:**
- Local: `http://localhost:5000/admin`
- Production: `https://api.velicham.com/admin`

### Method 2: Direct API Access
```
GET http://localhost:5000/api/enquiry
GET http://localhost:5000/api/enquiry/stats
```

### Method 3: Direct File Access (Development Only)
- Open: `backend/admin-dashboard.html` in browser
- Or: `backend/enquiries/*.json` folder

---

## 🚀 How to Use After Publishing

### Step 1: Start Backend Server
```bash
npm start
# or for development:
npm run dev
```

### Step 2: Open Admin Dashboard
In your browser, navigate to:
```
http://localhost:5000/admin
```

### Step 3: View Enquiries
- **Dashboard loads automatically** with all enquiries
- **Enquiries refresh every 30 seconds** (auto-refresh)
- **Click email/phone links** to contact parents
- **Download CSV** for spreadsheet import

---

## 📊 What You'll See

### Dashboard Statistics
- **Total Enquiries** - All received enquiries
- **Emails Sent** - Successfully delivered emails
- **Email Failed** - Failed email attempts

### Enquiry Details
For each enquiry, you'll see:
- ✅ **Parent Name** - Who sent the enquiry
- ✅ **Email** - Clickable link to send reply
- ✅ **Phone** - Clickable link to call
- ✅ **Child Info** - Name and age
- ✅ **Message** - Full enquiry message
- ✅ **Email Status** - Badge showing: `sent`, `failed`, `pending`
- ✅ **Timestamp** - When received

---

## 🔧 Configuration

The admin dashboard is now integrated into your backend server:

**File:** `backend/server.js`
```javascript
// Serve admin dashboard
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin-dashboard.html'));
});
```

---

## 🌐 Deployment URLs

### Local Development
```
http://localhost:5000/admin
```

### Production Examples

**On your server:**
```
https://api.velicham.com/admin
https://velicham-backend.herokuapp.com/admin
https://backend.velicham.in/admin
```

### Keep Track Of It
- Bookmark the admin URL
- Or set it as a browser home page
- Add to your team's internal documentation

---

## ⚠️ Security Recommendations

Since the admin dashboard is accessible to anyone with the URL, consider adding authentication:

### Option 1: Add Password Protection (Recommended for Production)
```javascript
// In server.js before admin route
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

app.get('/admin', (req, res) => {
  const password = req.query.pwd || req.headers['x-admin-password'];
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).send('Unauthorized');
  }
  res.sendFile(path.join(__dirname, 'admin-dashboard.html'));
});
```

Then access with:
```
http://localhost:5000/admin?pwd=yourpassword
```

### Option 2: Use Environment Variable
```
ADMIN_PASSWORD=secretpassword npm start
```

### Option 3: Restrict by IP (If Behind Proxy)
Only allow access from specific IPs.

---

## 📱 Mobile Access

The admin dashboard is **fully responsive**:
- ✅ Works on mobile phones
- ✅ Works on tablets
- ✅ Works on desktops
- ✅ Auto-detects screen size

Access from any device:
```
http://yourdomain.com/admin
```

---

## 🔄 Features

### Real-Time Updates
- Dashboard refreshes every 30 seconds
- Shows latest enquiries first
- Counts update automatically

### Download Data
- **CSV Export** - Download all enquiries as spreadsheet
- **Open in Excel** - Compatible with all spreadsheet apps
- **Backup** - Keep copies for archival

### Contact Parents
- **Email links** - Click to send replies
- **Phone links** - Click to call (on mobile)
- **Timestamp** - See when enquiry was received

---

## 🆘 Troubleshooting

### Admin Dashboard Shows "Error Loading Data"
1. Check backend is running: `npm start`
2. Check port is 5000 (or correct port in .env)
3. Check `.env` file exists with EMAIL settings
4. Reload page (Ctrl+R or Cmd+R)

### Can't Reach Admin Dashboard
1. Verify URL is correct
2. Check backend server is running
3. Check firewall/proxy isn't blocking access
4. Try from different browser/device

### No Enquiries Showing
1. Check `backend/enquiries/` folder has files
2. Verify POST requests reached the backend
3. Check browser console for errors (F12)
4. Click "Refresh" button in dashboard

---

## 📞 API Endpoints

### Get All Enquiries
```bash
curl http://localhost:5000/api/enquiry
```

Response:
```json
{
  "success": true,
  "enquiries": [...],
  "total": 15,
  "unread": 12
}
```

### Get Statistics
```bash
curl http://localhost:5000/api/enquiry/stats
```

Response:
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

---

## 📝 Summary

**After Publishing:**
1. ✅ Start backend: `npm start`
2. ✅ Open admin: `http://yourdomain.com/admin`
3. ✅ View all enquiries with status
4. ✅ Download as CSV if needed
5. ✅ Contact parents directly from dashboard

**The admin dashboard is your fallback** if emails don't arrive - all enquiries are always saved and viewable here!

---

Last Updated: 2025-11-27
