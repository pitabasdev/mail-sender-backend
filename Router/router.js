const Router = require('express').Router();
const Nodemailer = require('nodemailer');

Router.post('/mail', (req, resp) => {
    const { email, subject,message } = req.body;

    try {
        const transporter = Nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL, 
            to: email,
            subject: subject,
            html:`Dear Friend,<br><div style="margin-left:48px;text-transform: capitalize;">${message}</div>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                resp.status(500).send('Something went wrong');
            } else {
                console.log('Email sent:' + info.response);
                resp.status(200).send('Email sent successfully');
            }
        });
    } catch (error) {
        console.log("Error in sending email:", error);
    }
});

module.exports = Router;
