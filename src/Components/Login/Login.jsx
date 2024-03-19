import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../firebase/Firbase";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        console.log("google mama is coming");
    };
    return (
        <div>
            <button className="btn" onClick={handleGoogleSignIn}>
                Google login
            </button>
        </div>
    );
};

export default Login;
