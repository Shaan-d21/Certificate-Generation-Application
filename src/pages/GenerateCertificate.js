import { useState } from "react";
import { generateCertificate } from "../services/certService";

function GenerateCertificate() {
    const [formData, setFormData] = useState({ name: "", email: "", template: "default" });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await generateCertificate(formData);
            alert("Certificate Generated! Download: " + response.data.pdfURL);
        } catch (error) {
            console.error("Error Generating Certificate:", error);
            setError(error.response?.data?.message || "An unexpected error occurred. Check the console for details.");
        }
    };

    return (
        <div>
            <h2>Generate Certificate</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}  {/* ✅ Show actual error message */}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Recipient Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Recipient Email" onChange={handleChange} required />
                <button type="submit">Generate</button>
            </form>
        </div>
    );
}

export default GenerateCertificate;
