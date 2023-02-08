import {
    REACT_APP_SMTP_HOST,
    REACT_APP_SMTP_PASSWORD,
    REACT_APP_SMTP_PORT,
    REACT_APP_SMTP_USER,
} from "env";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function (req: NextApiRequest, res: NextApiResponse) {
    const { name, email, subject, comments } = req.body;

    console.log(req.body, "!!!");

    const transporter = nodemailer.createTransport({
        host: REACT_APP_SMTP_HOST,
        port: REACT_APP_SMTP_PORT,
        secure: true,
        auth: {
            user: REACT_APP_SMTP_USER,
            pass: REACT_APP_SMTP_PASSWORD,
        },
    });

    transporter.sendMail(
        {
            from: `${name} <${email}>`,
            to: REACT_APP_SMTP_USER,
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
