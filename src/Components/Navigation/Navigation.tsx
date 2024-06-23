import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import SignIn from "../SignIn/SignIn";
import Adds from "../Adds/Adds";

interface NavigationProps {
    isSignIn: boolean;
    setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({ isSignIn, setIsSignIn }) => {
    return (
        <Router basename="AddFolio">
        {/* // <Router > */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Ghnizz</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            {isSignIn && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/adds">Ads</Link>
                                </li>
                            )}
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                            <li className="nav-item">
                                
                                {isSignIn ? (
                                    <Link className="nav-link" to="/signIn">Logout</Link>
                                ) : (
                                    <Link className="nav-link" to="/signIn">Sign In</Link>
                                )}
                            </li>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-5">
                <Routes>
                    <Route path="/" element={<Home title="Home" />} />
                    <Route path="/about" element={<About title="About" />} />
                    <Route path="/signIn" element={<SignIn title="Sign-In" setIsSignIn={setIsSignIn} isSignIn={isSignIn} />} />

                    {isSignIn &&
                        <Route path="/adds" element={<Adds title="Manage Ads" />} />}
                    {/* {isSignIn ? (
                        <Route path="/adds" element={<Adds title="Manage Ads" />} />
                    ) : (
                        <Route path="*" element={<Navigate to="/signIn" />} />
                    )} */}
                </Routes>
            </div>

            {/* Extra Space like 30px */}
            <div style={{ height: '30px' }}></div>
            <footer className="bg-dark text-light text-center py-3">
                <div className="container">
                    <p className="mb-3">&copy; 2024 Ghnizz. All Rights Reserved.</p>
                    <p className="mt-3">Designed with ❤️ by Your Team</p>
                </div>
            </footer>
        </Router>
    );
}

export default Navigation;
