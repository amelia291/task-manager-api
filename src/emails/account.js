const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hoangmai.3715@gmail.com',
        subject:'Welcome on board!',
        text: `Welcome to the app, ${name}. Let me know if you have any problem!`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hoangmai.3715@gmail.com',
        subject: 'Cancel request received',
        text: `${name}, we have cancelled your account and would love to receive some feedbacks to improve the app. \nThank you and have a good day!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}