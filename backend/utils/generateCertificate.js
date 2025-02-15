import PDFDocument from 'pdfkit';

export const generateCertificate = (certificateData) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: 'A4', layout: 'landscape' });
      const buffers = [];
      
      // Add certificate content (customize as needed)
      doc.fontSize(30).text('Certificate of Completion', { align: 'center' });
      doc.moveDown();
      doc.fontSize(20).text(`Awarded to: ${certificateData.recipientName}`, { align: 'center' });
      doc.moveDown();
      doc.fontSize(18).text(`For completing: ${certificateData.courseName}`, { align: 'center' });

      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => resolve(Buffer.concat(buffers)));
      doc.end();
    } catch (error) {
      reject(error);
    }
  });
};