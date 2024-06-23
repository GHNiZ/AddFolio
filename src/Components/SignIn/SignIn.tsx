import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SignInProps {
    title: string;
    setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
    isSignIn: boolean; // Define isSignIn prop in SignInProps interface
}

const SignIn: React.FC<SignInProps> = ({ title, setIsSignIn, isSignIn }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(() => {
        const storedSignIn = localStorage.getItem("isSignIn");
        if (storedSignIn) {
            setIsSignIn(JSON.parse(storedSignIn));
        }
    }, [setIsSignIn]);

    const handleSignIn = () => {
        const validUsername = 'ghnizz';
        const validPassword = 'easyhain';

        if (username === validUsername && password === validPassword) {
            setIsSignIn(true);
            localStorage.setItem("isSignIn", JSON.stringify(true)); // Store isSignIn state in localStorage
            navigate("/"); 
        } else {
            alert("Password easyhain bro...");
        }
    };

    const handleLogout = () => {
        setIsSignIn(false);
        localStorage.removeItem("isSignIn"); // Remove isSignIn state from localStorage on logout
        navigate("/signIn");
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">{title}</h2>
            {isSignIn ? (
                <>
                    <p className="text-center">You are signed in.</p>
                    <button
                        type="button"
                        className="btn btn-danger w-100"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </>
            ) : (
                <form className="w-100">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="username" 
                            placeholder="Enter your username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button 
                        type="button" 
                        className="btn btn-primary w-100"
                        onClick={handleSignIn}
                    >
                        Sign In
                    </button>
                </form>
            )}
        </div>
    );
}

export default SignIn;
