# Frontend-Backend Integration Contracts

## Overview
This document outlines the API contracts and integration points between the React frontend and FastAPI backend for Tushar Singh's AI Engineer Portfolio.

## Current Mock Data
The following features are currently using mock data in the frontend:
- Contact form submission (shows success toast but doesn't store/send)

## Backend Implementation Required

### 1. Contact Form API

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Message sent successfully",
  "submission_id": "string"
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "Error message"
}
```

**Backend Tasks:**
- Create MongoDB model for ContactSubmission
- Validate input data (email format, required fields)
- Store submission in MongoDB
- Integrate Resend API to send email notification
- Return success/error response

### 2. Resume Download (Optional Enhancement)

**Endpoint:** `GET /api/resume/download`

**Response:** PDF file stream

**Backend Tasks:**
- Serve resume PDF file from storage
- Set appropriate headers for file download

## MongoDB Schema

### ContactSubmission Model
```python
{
  "id": "UUID",
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "text",
  "submitted_at": "datetime",
  "status": "enum (new, read, archived)"
}
```

## Resend Email Integration

**Configuration Required:**
- Resend API Key (environment variable: `RESEND_API_KEY`)
- From email: Configure in Resend dashboard
- To email: tushar80rt@gmail.com

**Email Template:**
- Subject: `New Portfolio Contact: {subject}`
- Body: Include name, email, subject, message, timestamp

## Frontend Integration Points

### Contact.jsx
**Current Mock Code:**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Mock submission
  toast({
    title: 'Message Sent Successfully!',
    description: 'Thank you for reaching out. I\'ll get back to you soon!',
    duration: 5000
  });
  
  // Reset form
  setFormData({...});
};
```

**Updated Code (Backend Integration):**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
    
    if (response.data.success) {
      toast({
        title: 'Message Sent Successfully!',
        description: 'Thank you for reaching out. I\'ll get back to you soon!',
        duration: 5000
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  } catch (error) {
    toast({
      title: 'Error',
      description: 'Failed to send message. Please try again.',
      variant: 'destructive',
      duration: 5000
    });
  }
};
```

## Environment Variables

### Backend (.env)
```
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=tushar80rt@gmail.com
MONGO_URL=(existing)
DB_NAME=(existing)
```

## Testing Checklist

- [ ] Contact form validation (frontend)
- [ ] Contact form submission (backend)
- [ ] MongoDB storage verification
- [ ] Resend email delivery
- [ ] Error handling (invalid email, network errors)
- [ ] Form reset after successful submission
- [ ] Toast notifications (success/error)

## Notes
- All API routes must use `/api` prefix for Kubernetes ingress routing
- Frontend uses `process.env.REACT_APP_BACKEND_URL` for backend URL
- Backend runs on port 8001 (mapped externally)
- Contact form is the only feature requiring backend integration
- Resume download can be added later as enhancement
