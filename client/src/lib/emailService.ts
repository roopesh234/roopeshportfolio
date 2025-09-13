export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Simple email sending using server endpoint
export const sendEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch('/api/send-contact-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Email sent successfully:', result);
      return true;
    } else {
      console.error('Failed to send email:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
