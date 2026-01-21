import resend
import os
from datetime import datetime


class EmailService:
    def __init__(self):
        self.api_key = os.environ.get('RESEND_API_KEY', '')
        if self.api_key:
            resend.api_key = self.api_key
        self.from_email = os.environ.get('EMAIL_FROM', 'onboarding@resend.dev')
        self.to_email = os.environ.get('EMAIL_TO', 'tushar80rt@gmail.com')

    async def send_contact_notification(self, name: str, email: str, subject: str, message: str):
        """Send email notification for new contact form submission"""
        
        if not self.api_key:
            print("Warning: RESEND_API_KEY not configured. Email not sent.")
            return {"success": False, "message": "Email service not configured"}

        try:
            html_content = f"""
            <html>
                <body style="font-family: Arial, sans-serif; background-color: #000000; color: #ffffff; padding: 40px;">
                    <div style="max-width: 600px; margin: 0 auto; background-color: #121212; border: 2px solid #00FFD1; border-radius: 10px; padding: 30px;">
                        <h1 style="color: #00FFD1; margin-bottom: 20px; font-size: 28px;">🚀 New Portfolio Contact</h1>
                        
                        <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                            <h2 style="color: #00FFD1; font-size: 20px; margin-bottom: 10px;">Contact Details</h2>
                            <p><strong style="color: #00FFD1;">Name:</strong> {name}</p>
                            <p><strong style="color: #00FFD1;">Email:</strong> {email}</p>
                            <p><strong style="color: #00FFD1;">Subject:</strong> {subject}</p>
                        </div>
                        
                        <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                            <h2 style="color: #00FFD1; font-size: 20px; margin-bottom: 10px;">Message</h2>
                            <p style="white-space: pre-wrap; line-height: 1.6;">{message}</p>
                        </div>
                        
                        <div style="text-align: center; color: #4D4D4D; font-size: 12px; margin-top: 30px;">
                            <p>Received on {datetime.utcnow().strftime('%B %d, %Y at %H:%M UTC')}</p>
                            <p>Sent from Portfolio Contact Form</p>
                        </div>
                    </div>
                </body>
            </html>
            """

            params = {
                "from": self.from_email,
                "to": [self.to_email],
                "subject": f"New Portfolio Contact: {subject}",
                "html": html_content
            }

            email_response = resend.Emails.send(params)
            
            return {
                "success": True,
                "message": "Email sent successfully",
                "email_id": email_response.get('id')
            }

        except Exception as e:
            print(f"Error sending email: {str(e)}")
            return {
                "success": False,
                "message": f"Failed to send email: {str(e)}"
            }


email_service = EmailService()
