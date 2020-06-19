require('dotenv').config()
const mailer = require('nodemailer')
// const { Hello } = require('./hello_template')

const { PASSWORD, EMAil } = process.env

const getEmailData = (to, name, template) => {
    let data = null;

    switch (template) {
        case 'hello':
            data = {
                from: 'Stevo <jordanstephen949>',
                to,
                subject: `Hello ${name}`,


            }
            break
        case 'thanks':
            data = {
                from: 'Stevo <jordanstephen949>',
                to,
                subject: `Hello ${name}`,


            }
            break
        default:
            data
    }

    return data
}

const sendEmail = (to, name, type) => {
    const smtpTransport = mailer.createTransport({
        service: 'Gmail',
        auth: {
            user: EMAil,
            pass: PASSWORD

        }
    })

    const mail = getEmailData(to, name, type)

    smtpTransport.sendMail(mail, function (error, response) {
        if (error) {
            console.log(error)
        } else {
            console.log('email sent')
        }
        smtpTransport.close()
    })
}

module.exports = {
    sendEmail
}