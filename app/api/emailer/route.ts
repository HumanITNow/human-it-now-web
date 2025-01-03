import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import ContactMessage from '@/types/ContactMessage';

export async function POST(req: NextRequest) {
    const { name, email, phone, preferredContact, aboutYou, message } = await req.json() as ContactMessage;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email service
        auth: {
            user: 'jared@humanitnow.com',
            pass: 'qxsd nwyi lmtc glox',
        },
    });

    // Set up email data
    const mailOptions = {
        from: email,
        to: ['jared@humanitnow.com', 'cary@humanitnow.com'], // Your email address
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred Contact Method: ${preferredContact}\nAbout the Business: ${aboutYou}\nMessage: ${message}`,
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error); // Log the error
        return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
    }
}