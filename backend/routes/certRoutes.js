const express = require("express");
const { generateCertificate, bulkGenerateCertificates } = require("../controllers/certController"); // ✅ Import bulkGenerateCertificates
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/generate", authMiddleware, generateCertificate);
router.post("/bulk-generate", authMiddleware, upload.single("file"), bulkGenerateCertificates);  // ✅ Now it should work

module.exports = router;
