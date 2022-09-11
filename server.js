const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();
let PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth:{
        type: "OAuth2",
        user: process.env.REACT_APP_EMAIL,
        clientId: process.env.REACT_APP_CLIENT_ID,
        clientSecret: process.env.REACT_APP_CLIENT_SECRET,
        refreshToken: process.env.REACT_APP_REFRESH_TOKEN,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    },
});

contactEmail.verify((error) => {
    if(error){
        console.log(error);
    }else {
        console.log("Ready to Send");
    }
});

router.post("/contact/", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const subject = req.body.title;
    const mail = {
        from: "daniffyx01@gmail.com",
        to: "daniffyx01@gmail.com",
        subject: subject,
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Subject: ${subject}</p>
               <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({code: 200, status: "Message Sent"});
        }
    });
})
