// src/routes/sendEmail.js
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private'




export async function GET(request) {
//   const { name, email, message } = request.body;

  let name = "Nancy"
  let email = "nn@gmail.com"
  let message = "Hello how are you"

  const transporter = nodemailer.createTransport({
    // Specify your email provider details here
    // host: 'smtp.example.com',
    // port: 587,
    // secure: false,
    service:'gmail',
    auth: {
      user: env.EMAIL,
      pass: env.PASS,
    },
  });

  // Compose the email message
  const mailOptions = {
    from: email,
    to: env.EMAIL,
    subject: 'New Custom Message',
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return {
      status: 200,
      body: {
        success: true,
        message: 'Email sent successfully.',
      },
    };
  } catch (error) {
    console.error('Error occurred while sending email:', error);
    return {
      status: 500,
      body: {
        success: false,
        message: 'Failed to send email.',
      },
    };
  }
}

