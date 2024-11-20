const nodemailer = require('nodemailer');
const emailKey = process.env.EMAILKEY
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ishanrana094@gmail.com',
        pass: emailKey
    }
});

async function sendNotificationEmail(data) {
    try {
        let info = await transporter.sendMail({
            from: '"Project Notifications" ishanrana094@gmail.com ',
            to: 'ishanrana094@gmail.com',
            subject: `Contact with you: ${data.Name}`,
            text: `A new user contact you.\n\n
                   Name: ${data.Name}\n
                   Email: ${data.Email}\n
                   Message: ${data.Message}\n
}`
        });

    } catch (error) {
        return error.message;
    }
}

module.exports = sendNotificationEmail;