import { Link } from "react-router-dom";
import { getCurrentUser, logout } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const user = getCurrentUser();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav>
            <Link to="/">Home</Link>
            {!user ? (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            ) : (
                <>
                    <Link to="/dashboard">Dashboard</Link>
                    <button onClick={handleLogout}>Logout</button>
                </>
            )}
        </nav>
    );
};

export default Navbar;
