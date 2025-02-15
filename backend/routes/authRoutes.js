const express = require("express");
const passport = require("./auth/googleAuth");

const router = express.Router();

// 🔹 Redirect user to Google authentication page
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// 🔹 Google OAuth Callback Route
router.get("/google/callback", passport.authenticate("google", { session: false }), (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Authentication failed" });
    }

    // Redirect user with token (Can also send it directly in response)
    res.redirect(`http://localhost:3000/login-success?token=${req.user.token}`);
});

module.exports = router;
