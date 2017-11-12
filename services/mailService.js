exports.sendEmail = function (email, message, name, phone) {
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'softelo.info@gmail.com',
            pass: 'Softelo19021984@*'
        }
    });

    var mailOptions = {
        from: email,
        to: 'damian.blazejewski@gmail.com',
        subject: name,
        text: message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });
};