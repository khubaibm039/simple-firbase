import { useState } from "react";
import app from "../../firebase/Firbase";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from "firebase/auth";

const Login = () => {
    const [user, setUser] = useState();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    const handleSignOut = () => {
        const auth = getAuth(app);
        signOut(auth)
            .then(() => {
                setUser();
                alert("signOut successful");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <div>
            {user ? (
                <button className="btn" onClick={handleSignOut}>
                    Sign Out
                </button>
            ) : (
                <button onClick={handleSignIn} className="btn">
                    Google login
                </button>
            )}

            {user && (
                <div>
                    <h3>User: {user?.displayName}</h3>

                    <p>Email: {user?.email} </p>

                    <img src={user?.photoURL} alt="" />
                </div>
            )}
        </div>
    );
};

export default Login;
