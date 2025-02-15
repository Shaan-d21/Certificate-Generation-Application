const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    const token = authHeader.split(" ")[1]; // Extract token

    console.log("Received Token:", token);  // ✅ Debugging log

    if (!token) {
        return res.status(401).json({ message: "Invalid token format" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded); // ✅ Debugging log
        req.user = decoded;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message); // ✅ Debugging log
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = authMiddleware;
