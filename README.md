# Certificate-Generation-Application

Certificate Generation System
🚀 A complete system for generating and emailing certificates, built with MERN (MongoDB, Express, React, Node.js) and Google OAuth authentication.

## Prerequisites
Before running this project, ensure you have installed:
✅ Node.js (v18 or later)
✅ MongoDB (for local database)
✅ Git (to clone the repository)

## Installation Guide
1️⃣ Clone the Repository
`git clone https://github.com/yourusername/certificate-generator.git`
`cd certificate-generator`

2️⃣ Install Backend Dependencies
Navigate to the backend folder and install dependencies:

`cd backend`
`npm install`

This will install:
Express (Backend Framework)
Mongoose (MongoDB ORM)
Nodemailer (Email Service)
JWT (Authentication)
Passport.js (Google OAuth)
Dotenv (Environment Variables)

3️⃣ Install Frontend Dependencies
Navigate to the frontend folder and install dependencies:

In the main folder
`npm install`
This will install:

React (Frontend Library)
Axios (For API requests)
@react-oauth/google (Google OAuth)
jwt-decode (Decode JWT tokens)
Tailwind CSS (UI Styling)

## Required Packages & Installation
Backend (backend/)

`npm install express mongoose cors dotenv nodemailer jsonwebtoken bcryptjs passport passport-google-oauth20 multer csv-parser`

## Frontend (frontend/)

`npm install react axios @react-oauth/google jwt-decode tailwindcss`

## Setup Environment Variables
Create a .env file inside the backend folder:

`PORT=5000`
`MONGO_URI=mongodb://127.0.0.1:27017/certificateApp`
`JWT_SECRET=your_secret_key`
`EMAIL=your-email@gmail.com`
`EMAIL_PASSWORD=your-app-password`
`GOOGLE_CLIENT_ID=your-google-client-id`
`GOOGLE_CLIENT_SECRET=your-google-client-secret`

Replace values with your actual credentials.

## Running the Project
1️⃣ Start MongoDB
If using a local database, start MongoDB:
`mongod`

For MongoDB Atlas, make sure your MONGO_URI is set correctly in .env.

2️⃣ Start Backend
Inside the backend folder:

`npx nodemon server.js`

The backend will run on `http://localhost:5000.`

3️⃣ Start Frontend
Inside the frontend folder:
`npm start`

The frontend will run on `http://localhost:3000.`

## API Endpoints
Method	Endpoint	Description
POST	/api/auth/google	Google OAuth Login
POST	/api/certificates/generate	Generate a certificate
POST	/api/certificates/bulk-generate	Generate multiple certificates via CSV
GET	/api/certificates/:id	View a certificate
