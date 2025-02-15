import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to Certificate Generator</h1>
            <p>Create and distribute certificates easily.</p>
            <Link to="/register">
                <button>Get Started</button>
            </Link>
        </div>
    );
};

export default Home;
