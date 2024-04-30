const express = require('express');
const hbs = require('hbs');
const nodemailer = require('nodemailer');
const fs = require('fs');
const PDFDocument = require('pdfkit');

const app = express();

// Set up Handlebars as the view engine
app.set('view engine', 'hbs');

// Define a route to generate and send the PDF
app.get('/generate-pdf', (req, res) => {
	// Render the Handlebars template to HTML
	const html = hbs.compile('<h1>Hello, {{name}}!</h1><p>This is a PDF generated using Handlebars and Node.js.</p>')({ name: 'John' });

	// Create a new PDF document
	const doc = new PDFDocument();
	doc.text(html);

	// Pipe the PDF content to a file
	const pdfPath = 'output.pdf';
	const pdfStream = fs.createWriteStream(pdfPath);
	doc.pipe(pdfStream);
	doc.end();

	// Send the generated PDF through email
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'your-email@gmail.com',
			pass: 'your-email-password'
		}
	});

	transporter.sendMail({
		from: 'your-email@gmail.com',
		to: 'recipient-email@example.com',
		subject: 'PDF Generated with Handlebars',
		text: 'Please find the attached PDF',
		attachments: [
			{
				filename: 'output.pdf',
				path: pdfPath
			}
		]
	}, (err, info) => {
		if (err) {
			console.error(err);
			res.send('Error sending email');
		} else {
			console.log('Email sent: ' + info.response);
			res.send('Email sent successfully');
		}

		// Delete the generated PDF file after sending
		fs.unlinkSync(pdfPath);
	});
});

// Start the Express server
app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});