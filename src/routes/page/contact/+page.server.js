import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private'



export const actions = {
    default: async ({request})=>{
        let data = await request.formData()

        let name = data.get('name')
        let email = data.get('email')
        let subject = data.get('subject')
        let message = data.get('message')




        //console.log(data.get('email'))
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
              user: env.EMAIL,
              pass: env.PASS,
            },
        });
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
                val:true,
                status: 200,
                body: {
                success: true,
                message: 'Email sent successfully.',
              },
            };
          } catch (error) {
            console.error('Error occurred while sending email:', error);
            return {
                val:true,
                status: 500,
                body: {
                success: false,
                message: 'Failed to send email.',
              },
            };
          }
    }
}