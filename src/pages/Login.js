import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // ✅ Correct import

const Login = () => {
    const handleSuccess = (response) => {
        try {
            const decoded = jwtDecode(response.credential); // ✅ Correct function name
            console.log("User Info:", decoded);

            // Save user token in localStorage
            localStorage.setItem("user", JSON.stringify({ token: response.credential }));
            window.location.href = "/dashboard"; // Redirect to dashboard
        } catch (error) {
            console.error("Error decoding token:", error);
        }
    };

    const handleFailure = (error) => {
        console.error("Google Sign-In Failed", error);
    };

    return (
        <GoogleOAuthProvider clientId="834828189921-n93v4s397rjij0oe5i1a26qp5ptr5nn1.apps.googleusercontent.com">
            <div>
                <h2>Login</h2>
                <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
