# EmailJS Configuration Guide

## ✅ Current Configuration Status

Your EmailJS integration is **fully configured and ready to use**!

## 📧 EmailJS Credentials

The following credentials are configured in your Contact form:

- **Service ID**: `service_8py5gi7`
- **Template ID**: `template_2pumce9`
- **Public Key**: `USCTNcslrY53r_hG4`

## 📝 Template Variables

Your EmailJS template should use these variables to receive form data:

```
{{from_name}}    - User's full name
{{from_email}}   - User's email address
{{phone}}        - User's phone number
{{subject}}      - Selected subject/inquiry type
{{message}}      - User's message content
```

## 🎯 How to Configure Your EmailJS Template

1. **Login to EmailJS Dashboard**: https://dashboard.emailjs.com/
2. **Navigate to Email Templates**
3. **Find template**: `template_2pumce9`
4. **Edit the template** to include these variables:

### Example Template Structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent from Digambara Construction website contact form.
```

## 🔧 Form Fields Configuration

The contact form includes:

1. **Full Name** (required) - `from_name`
2. **Email Address** (required) - `from_email`
3. **Phone Number** (required) - `phone`
4. **Subject** (required) - `subject` with dropdown options:
   - New Project Inquiry
   - Building Planning
   - Cost Estimation
   - Building Permission
   - NA Layout
   - Request Quotation
   - Other
5. **Message** (required) - `message`

## ✨ Features Implemented

### Success Message
- ✅ Green success message with checkmark icon
- ✅ Displays for 5 seconds
- ✅ Auto-clears form after successful submission
- ✅ Smooth slide-down animation

### Error Message
- ✅ Red error message with alert icon
- ✅ Displays for 5 seconds
- ✅ Shows when email fails to send
- ✅ Smooth slide-down animation

### Loading State
- ✅ Loading spinner during submission
- ✅ Button disabled while sending
- ✅ "Sending..." text feedback

## 🕐 Business Hours Display

### Contact Page
- Shows: "Open 24 Hours - 7 Days a Week"
- Location: Contact information section

### Footer
- Shows: "Open 24 Hours - 7 Days a Week"
- Location: Contact Info column

## 📍 Contact Information

All pages display:
- **Address**: Beed, Navgan Rajuri, Maharashtra 431122
- **Phone**: +91 9561231865
- **Email**: info@digambaraconstruction.com
- **Hours**: Open 24 Hours - 7 Days a Week

## 🧪 Testing Your Configuration

1. **Test the form** by filling it out and submitting
2. **Check your email** (configured in EmailJS dashboard)
3. **Verify all variables** appear correctly in the received email
4. **Test error handling** by temporarily using wrong credentials

## 🔍 Troubleshooting

If emails are not being received:

1. **Verify EmailJS Dashboard**:
   - Service is active
   - Template exists and is published
   - Email service is connected (Gmail, Outlook, etc.)

2. **Check Browser Console**:
   - Open Developer Tools (F12)
   - Look for any error messages
   - Verify network requests are successful

3. **Verify Template Variables**:
   - All variables in template match form field names
   - Variables use double curly braces: `{{variable_name}}`

4. **Check Spam Folder**:
   - Test emails might go to spam initially
   - Mark as "Not Spam" to train filters

## 📦 Package Information

- **Package**: `@emailjs/browser` version `^4.4.1`
- **Status**: ✅ Installed and configured
- **Location**: `DigambaraConstructions/package.json`

## 🎨 Styling

All form elements use the custom CSS theme:
- Golden primary color (`#d4af37`)
- Dark mode support
- Responsive design
- Smooth animations
- Professional appearance

## 📱 Responsive Design

The contact form is fully responsive:
- Desktop: Side-by-side layout (info + form)
- Tablet: Stacked layout
- Mobile: Full-width form with optimized spacing

---

**Last Updated**: Configuration complete and verified
**Status**: ✅ Ready for production use
