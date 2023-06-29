import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function (req: NextApiRequest, res: NextApiResponse) {
    const { name, email, subject, comments } = req.body;
    const text = `Dear ${name},

    Thank you for reaching out to us. We have received your email and wanted to let you know that we are actively working on your request. We will respond to you shortly with the information you need.
    
    Thank you for your patience.
    
    Best regards,
    Iteam
    `;

    const transporter = nodemailer.createTransport({
        host: process.env.REACT_APP_SMTP_HOST,
        port: process.env.REACT_APP_SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.REACT_APP_SMTP_USER,
            pass: process.env.REACT_APP_SMTP_PASSWORD,
        },
    } as { host: string });
    try {
        transporter.sendMail(
            {
                from: `${name} <${email}>`,
                to: process.env.REACT_APP_SMTP_USER,
                text: `text: ${comments}, client's name: ${name}, client's email<${email}>`,
                subject,
            },
            (err, info) => {
                if (err) {
                    console.log(err);
                    res.status(500).send(err);
                } else {
                    console.log(info);
                    res.status(200).send(info);
                }
            },
        );
    } catch (error) {
        console.log(error);
    } finally {
        transporter.sendMail(
            {
                from: "iteam.communication.manager@gmail.com",
                to: req.body.email,
                text: text,
                subject,
            },
            (err, info) => {
                if (err) {
                    console.log(err);
                    res.status(500).send(err);
                } else {
                    console.log(info);
                    res.status(200).send(info);
                }
            },
        );
    }
}
