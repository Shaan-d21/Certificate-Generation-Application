import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import GenerateCertificate from "./pages/GenerateCertificate";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";  // ✅ Include Navbar

function App() {
    return (
        <Router>
            <Navbar />  {/* Navbar Visible on All Pages */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/generate" element={<ProtectedRoute><GenerateCertificate /></ProtectedRoute>} />
            </Routes>
        </Router>
    );
}

export default App;
