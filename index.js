var nodemailer = require("nodemailer");

async function main() {

	let account = await nodemailer.createTestAccount();

	let transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port : 587,
		secure : false,
		auth : {
			user : account.user,
			pass : account.pass
		}
	});	

	let mailOptions = {
		from : '"Mohit Kalra"<mohit.kalra@stratbeans.com>',
		to   : "mohit2494@gmail.com",
		subject : 'Hello',
		text : 'Hello World',
		html : '<b>Hello World</b>'
	};

	// send mail with defined transport object
	let info = await transporter.sendMail(mailOptions)

	console.log("Message sent: %s",info.messageId);

	console.log("Preview URL : %s",nodemailer.getTestMessageUrl(info));


}

// catch promise error
main().catch(console.error);
