import { NextResponse, NextRequest } from 'next/server'
import nodemailer from 'nodemailer';

// Handles POST requests to /api


export async function POST(request: Request) {

    // const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
    // const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
    // const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

    const requestBody = await request.json();

    // create transporter object
    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },

        auth: {

            user: "pierredimo@live.com",
            pass: "28Janvier1995?"
        }
    });

    try {
        await transporter.sendMail({
            from: "pierredimo@live.com",
            to: "timena.franklin@yahoo.de",
            subject: "test",
            html: `
            <p>Name: ${requestBody.text.name} </p>
            <p>Email: ${requestBody.text.email} </p>
            <p>reponse: ${requestBody.text.attendance}</p>
            <p>Accompagnement: ${requestBody.text.invitee}</p>
            <p>Message: ${requestBody.text.message} </p>
            `,
        })
        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        NextResponse.json({ message: "COULD NOT SEND MESSAGE" })
    }
}