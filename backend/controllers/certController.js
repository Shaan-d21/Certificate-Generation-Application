const nodemailer = require("nodemailer");
const fs = require("fs");
const PDFDocument = require("pdfkit");
const Certificate = require("../models/Certificate");

// 🔹 Function to send email with certificate attached
const sendCertificateEmail = async (email, pdfPath) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "shaan042004@gmail.com",  // 🔹 Replace with your email
            pass: "certi123"      // 🔹 Use an **App Password** (not your real password)
        }
    });

    const mailOptions = {
        from: "samosa.with21@gmail.com@gmail.com",
        to: email,
        subject: "Your Certificate",
        text: "Congratulations! Attached is your certificate.",
        attachments: [{ filename: "certificate.pdf", path: pdfPath }]
    };

    await transporter.sendMail(mailOptions);
};

// 🔹 Function to generate certificate and send via email
exports.generateCertificate = async (req, res) => {
    try {
        const { name, email, template } = req.body;
        const pdfPath = `./certificates/${name}.pdf`;

        // ✅ Generate Certificate as PDF
        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream(pdfPath));
        doc.fontSize(24).text("Certificate of Achievement", { align: "center" });
        doc.moveDown();
        doc.fontSize(18).text(`Awarded to: ${name}`, { align: "center" });
        doc.end();

        // ✅ Save to Database
        const certificate = new Certificate({ name, email, template, pdfURL: pdfPath });
        await certificate.save();

        // ✅ Send Email
        await sendCertificateEmail(email, pdfPath);

        res.json({ message: "Certificate generated and sent successfully!", pdfURL: pdfPath });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const csv = require("csv-parser");
const path = require("path");

exports.bulkGenerateCertificates = async (req, res) => {
    try {
        const filePath = path.join(__dirname, `../uploads/${req.file.filename}`);
        const certificates = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on("data", async (row) => {
                const { name, email } = row;
                const pdfPath = `./certificates/${name}.pdf`;

                // ✅ Generate PDF
                const doc = new PDFDocument();
                doc.pipe(fs.createWriteStream(pdfPath));
                doc.fontSize(24).text("Certificate of Achievement", { align: "center" });
                doc.moveDown();
                doc.fontSize(18).text(`Awarded to: ${name}`, { align: "center" });
                doc.end();

                // ✅ Save to Database
                const certificate = new Certificate({ name, email, pdfURL: pdfPath });
                await certificate.save();

                // ✅ Send Email
                await sendCertificateEmail(email, pdfPath);

                certificates.push({ name, email, pdfURL: pdfPath });
            })
            .on("end", () => {
                res.json({ message: "Bulk Certificates Generated Successfully!", certificates });
            });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

