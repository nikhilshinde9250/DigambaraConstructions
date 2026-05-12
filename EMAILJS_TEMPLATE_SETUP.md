# EmailJS Template Setup Guide

## 📧 How to Configure Your EmailJS Template

Follow these steps to set up your email template in the EmailJS dashboard.

---

## Step 1: Login to EmailJS Dashboard

1. Go to: **https://dashboard.emailjs.com/**
2. Login with your credentials
3. Navigate to **Email Templates** section

---

## Step 2: Find Your Template

- Look for template ID: **`template_2pumce9`**
- Click on it to edit
- Or create a new template if it doesn't exist

---

## Step 3: Configure Template Settings

### Template Name
```
Digambara Construction - Contact Form
```

### Subject Line
```
New Contact Form Submission - {{subject}}
```

---

## Step 4: Email Template Content

Copy and paste this exact template into your EmailJS template editor:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
        }
        .header {
            background: linear-gradient(135deg, #d4af37 0%, #b8941e 100%);
            color: #000;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .content {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .field {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
        }
        .field-label {
            font-weight: bold;
            color: #d4af37;
            font-size: 14px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        .field-value {
            font-size: 16px;
            color: #333;
            margin-top: 5px;
        }
        .message-box {
            background-color: #f8f9fa;
            padding: 15px;
            border-left: 4px solid #d4af37;
            border-radius: 4px;
            margin-top: 10px;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #d4af37;
            color: #666;
            font-size: 14px;
        }
        .company-info {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏗️ Digambara Construction</h1>
            <p>New Contact Form Submission</p>
        </div>
        
        <div class="content">
            <h2 style="color: #d4af37; margin-top: 0;">Contact Details</h2>
            
            <div class="field">
                <div class="field-label">👤 Full Name</div>
                <div class="field-value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">📧 Email Address</div>
                <div class="field-value">{{from_email}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">📱 Phone Number</div>
                <div class="field-value">{{phone}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">📋 Subject</div>
                <div class="field-value">{{subject}}</div>
            </div>
            
            <div class="field" style="border-bottom: none;">
                <div class="field-label">💬 Message</div>
                <div class="message-box">
                    {{message}}
                </div>
            </div>
            
            <div class="company-info">
                <strong>📍 Company Contact Information:</strong><br>
                <strong>Phone:</strong> +91 9561231865<br>
                <strong>Email:</strong> info@digambaraconstruction.com<br>
                <strong>Address:</strong> Beed, Navgan Rajuri, Maharashtra 431122<br>
                <strong>Hours:</strong> Open 24 Hours - 7 Days a Week
            </div>
        </div>
        
        <div class="footer">
            <p><strong>Digambara Construction</strong></p>
            <p>We Believe in Consistency With Quality</p>
            <p style="font-size: 12px; color: #999;">
                This email was sent from the Digambara Construction website contact form.
            </p>
        </div>
    </div>
</body>
</html>
```

---

## Step 5: Plain Text Version (Optional but Recommended)

Add this as the plain text alternative:

```
NEW CONTACT FORM SUBMISSION - Digambara Construction
=====================================================

CONTACT DETAILS:
----------------
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

MESSAGE:
--------
{{message}}

=====================================================
COMPANY CONTACT INFORMATION:
Phone: +91 9561231865
Email: info@digambaraconstruction.com
Address: Beed, Navgan Rajuri, Maharashtra 431122
Hours: Open 24 Hours - 7 Days a Week

We Believe in Consistency With Quality
=====================================================

This email was sent from the Digambara Construction website contact form.
```

---

## Step 6: Template Variables Summary

Make sure these variables are correctly mapped:

| Variable Name | Form Field | Description |
|--------------|------------|-------------|
| `{{from_name}}` | Full Name | Customer's full name |
| `{{from_email}}` | Email Address | Customer's email |
| `{{phone}}` | Phone Number | Customer's phone |
| `{{subject}}` | Subject | Selected inquiry type |
| `{{message}}` | Message | Customer's message |

---

## Step 7: Test Your Template

1. In EmailJS dashboard, click **"Test It"** button
2. Fill in sample data:
   ```
   from_name: John Doe
   from_email: john@example.com
   phone: +91 9876543210
   subject: New Project Inquiry
   message: I am interested in building a new house.
   ```
3. Click **"Send Test"**
4. Check your email inbox
5. Verify all fields display correctly

---

## Step 8: Configure Email Service

### To Receive Emails At Your Address:

1. Go to **Email Services** in EmailJS dashboard
2. Select your email service (Gmail, Outlook, etc.)
3. In the **"To Email"** field, enter: `info@digambaraconstruction.com`
4. Or add your personal email where you want to receive inquiries
5. Save the configuration

---

## Step 9: Auto-Reply Setup (Optional)

To send automatic confirmation to customers:

1. Create a new template for auto-reply
2. Set **"To Email"** as: `{{from_email}}`
3. Subject: `Thank you for contacting Digambara Construction`
4. Body:
```
Dear {{from_name}},

Thank you for contacting Digambara Construction!

We have received your inquiry regarding: {{subject}}

Our team will review your message and get back to you within 24 hours.

Your Message:
{{message}}

Best regards,
Digambara Construction Team

Contact: +91 9561231865
Email: info@digambaraconstruction.com
Address: Beed, Navgan Rajuri, Maharashtra 431122

We Believe in Consistency With Quality
```

---

## 🔍 Troubleshooting

### Emails Not Received?

1. **Check Spam Folder**: Test emails often go to spam
2. **Verify Service Status**: Ensure email service is connected in dashboard
3. **Check Monthly Quota**: Free plan has 200 emails/month limit
4. **Verify Template ID**: Must be exactly `template_2pumce9`
5. **Check Service ID**: Must be exactly `service_8py5gi7`

### Variables Not Showing?

1. **Check Spelling**: Variables are case-sensitive
2. **Use Double Braces**: Must be `{{variable}}` not `{variable}`
3. **No Spaces**: `{{from_name}}` not `{{ from_name }}`

### Form Submission Fails?

1. **Check Public Key**: Must be `USCTNcslrY53r_hG4`
2. **Verify CORS**: EmailJS should allow your domain
3. **Check Browser Console**: Look for error messages
4. **Test in Incognito**: Rule out browser extensions

---

## 📱 Subject Dropdown Options

Your form has these subject options:
- New Project Inquiry
- Building Planning
- Cost Estimation
- Building Permission
- NA Layout
- Request Quotation
- Other

The selected option will appear in the `{{subject}}` variable.

---

## ✅ Verification Checklist

- [ ] Template ID is `template_2pumce9`
- [ ] Service ID is `service_8py5gi7`
- [ ] Public Key is `USCTNcslrY53r_hG4`
- [ ] All 5 variables are in template: `from_name`, `from_email`, `phone`, `subject`, `message`
- [ ] Email service is connected
- [ ] "To Email" is set to your email address
- [ ] Template is published/active
- [ ] Test email sent successfully
- [ ] Test email received in inbox

---

## 📞 Support

If you need help:
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

**Last Updated**: Template configuration guide
**Status**: Ready to configure in EmailJS dashboard
