import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function (req: NextApiRequest, res: NextApiResponse) {
    const { name, email, subject, comments } = req.body;

    const transporter = nodemailer.createTransport({
        host: process.env.REACT_APP_SMTP_HOST,
        port: process.env.REACT_APP_SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.REACT_APP_SMTP_USER,
            pass: process.env.REACT_APP_SMTP_PASSWORD,
        },
    } as { host: string });

    transporter.sendMail(
        {
            from: `${name} <${email}>`,
            to: process.env.REACT_APP_SMTP_USER,
            text: comments,
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
