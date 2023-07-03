const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lutfirrahman2001@gmail.com',
            pass: 'wgyhrlnuqpmmjeow',
        },
    });

    const mailOptions = {
        from: email,
        to: 'lutfirrahman2001@gmail.com',
        subject: 'New Message from Portfolio',
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
            // Kirim email balasan
            const replyMailOptions = {
                from: 'lutfirrahman2001@gmail.com',
                to: email,
                subject: 'Terima Kasih',
                text: 'Terima kasih atas tanggapan Anda.',
            };
            transporter.sendMail(replyMailOptions, (error, info) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log('Reply email sent: ' + info.response);
                }
            });
        }
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
