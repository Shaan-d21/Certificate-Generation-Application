import { useNavigate } from "react-router-dom";
import { logout, getCurrentUser } from "../services/authService";

const Dashboard = () => {
    const navigate = useNavigate();
    const user = getCurrentUser();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome, {user?.user?.name}!</p>
            <button onClick={() => navigate("/generate")}>Generate Certificate</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
