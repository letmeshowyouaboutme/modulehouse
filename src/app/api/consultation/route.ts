import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { productId, productName, phone, address } = body;

        // Validation
        if (!phone || !address) {
            return NextResponse.json(
                { message: 'Phone and address are required' },
                { status: 400 }
            );
        }

        // 1. Log to console (for verifying without credentials)
        console.log('--- Consultation Request Received ---');
        console.log('Product:', productName, `(ID: ${productId})`);
        console.log('Customer Phone:', phone);
        console.log('Customer Address:', address);
        console.log('-------------------------------------');

        // 2. Email Sending Logic (Mock or Real)
        // To enable real emails, add these to your .env file:
        // SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ADMIN_EMAIL

        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST || 'smtp.gmail.com',
                port: Number(process.env.SMTP_PORT) || 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            const mailOptions = {
                from: process.env.SMTP_USER,
                to: process.env.ADMIN_EMAIL || process.env.SMTP_USER, // Send to self if no admin email
                subject: `[상담신청] ${productName} - ${phone}`,
                text: `
          새로운 상담 신청이 들어왔습니다.
          
          제품명: ${productName} (ID: ${productId})
          연락처: ${phone}
          주소: ${address}
          
          빠른 시일 내에 연락 부탁드립니다.
        `,
            };

            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully to admin.');
        } else {
            console.log('SMTP credentials not found. Email skipped (Log only).');
        }

        return NextResponse.json(
            { message: 'Consultation request received successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing consultation:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
