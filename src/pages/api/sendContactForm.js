// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function (req, res) {

    require('dotenv').config()

    const email = process.env.EMAIL;
    const pass = process.env.EMAIL_PASS;

    let nodemailer = require("nodemailer")
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: email,
            pass: pass,
        },
        secure: true,
    })
    const mailData = {
        from: "",
        to: email,
        subject: `Message From ${req.body.name} | ${req.body.subject}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })
    res.status(200)
}