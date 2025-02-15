const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    email: { type: String, required: true },
    template: { type: String, required: true },  // Template name or URL
    pdfURL: { type: String }, // Store generated certificate link
}, { timestamps: true });

module.exports = mongoose.model('Certificate', CertificateSchema);
