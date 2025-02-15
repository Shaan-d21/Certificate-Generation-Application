import axios from "axios";

const API_URL = "http://localhost:5000/api/certificates/";

export const generateCertificate = async (certificateData) => {
    const user = JSON.parse(localStorage.getItem("user")); 
    const token = user?.token;  

    console.log("Token being sent:", token); // ✅ Log token

    if (!token) {
        throw new Error("User not authenticated. Please log in again.");
    }

    return await axios.post(API_URL + "generate", certificateData, {
        headers: { Authorization: `Bearer ${token}` }  // ✅ Correct format
    });
};
