import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import nodemailer from 'nodemailer';

async function sendTelegram(message: string) {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) return;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML',
        }),
    });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, email, location, date, usage, scale, method, productId, productName } = body;

        if (!name || !phone) {
            return NextResponse.json(
                { message: '성명과 연락처는 필수입니다.' },
                { status: 400 }
            );
        }

        // 1. Firestore에 저장
        const docRef = await addDoc(collection(db, 'consultations'), {
            name,
            phone,
            email: email || '',
            location: location || '',
            date: date || '',
            usage: usage || '',
            scale: scale || '',
            method: method || '',
            productId: productId || '',
            productName: productName || '',
            createdAt: serverTimestamp(),
            status: '신규',
        });

        console.log('Firestore 저장 완료:', docRef.id);

        // 2. 텔레그램 알림
        const telegramMsg = [
            `<b>📋 새 상담 신청</b>`,
            ``,
            `<b>성명:</b> ${name}`,
            `<b>연락처:</b> ${phone}`,
            email ? `<b>이메일:</b> ${email}` : '',
            location ? `<b>건축예정지:</b> ${location}` : '',
            date ? `<b>건축시기:</b> ${date}` : '',
            usage ? `<b>건축용도:</b> ${usage}` : '',
            scale ? `<b>건축규모:</b> ${scale}` : '',
            method ? `<b>건축공법:</b> ${method}` : '',
            productName ? `<b>관심제품:</b> ${productName}` : '',
        ].filter(Boolean).join('\n');

        await sendTelegram(telegramMsg);

        // 3. 이메일 (SMTP 설정 시 자동 동작)
        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST || 'smtp.gmail.com',
                port: Number(process.env.SMTP_PORT) || 587,
                secure: false,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            await transporter.sendMail({
                from: process.env.SMTP_USER,
                to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
                subject: `[상담신청] ${name} - ${phone}`,
                text: telegramMsg.replace(/<[^>]*>/g, ''),
            });
        }

        return NextResponse.json(
            { message: '상담 신청이 완료되었습니다.', id: docRef.id },
            { status: 200 }
        );
    } catch (error) {
        console.error('상담 신청 처리 오류:', error);
        return NextResponse.json(
            { message: '서버 오류가 발생했습니다.' },
            { status: 500 }
        );
    }
}
