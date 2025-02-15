const express = require("express");
const passport = require("../auth/googleAuth");  // ✅ Correct path
const session = require("express-session");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(
    session({
        secret: process.env.JWT_SECRET,
        resave: false,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());

// Import routes
app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
