const express = require("express");
const router = express.Router();
const Contact = require('../models/Contact.model')
const nodemailer = require("nodemailer");
/* GET home page */

router.get('/', (req, res, next) => {
    res.render('index');
});

router.post('/send', (req, res, next) => {
    const {
        email,
        subject,
        name,
        message
    } = req.body;
    Contact.create({
        email,
        subject,
        name,
        message
    })


    async function sendEmail() {
        try {
            let htmlEmail = `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body>
            <div style='width: 100%; height: 100%; background-color: #fff'>
                <h4>entram em contato no seu portifolio</h4></span>
              </div>
              </div>
          </body>
          </html>`;
            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: { user: "blocobapp@gmail.com", pass: `${process.env.nodemailerCode}` },
            });
            let mail = {
                from: "PORTIFOLIO PAGE",
                to: "volney.faustini@gmail.com",
                subject: "PORTIFOLIO CONTACT",
                html: htmlEmail,
            }
            transporter.sendMail(mail, function (error, info) {
                if (error) console.log(error)
                else {
                    return info
                }
            })
        } catch (error) {
            console.log(error.message)
            throw error;
        }
    }




    res.render('index', {
        sentMessage: 'Mensagem Enviada com sucesso, Obrigado !'
    });

});


module.exports = router;