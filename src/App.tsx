import React, { useState } from "react";
import Navigation from "./Components/Navigation/Navigation";

const App: React.FC = () => {
    const [isSignIn, setIsSignIn] = useState(false); // Initialize sign-in state

    return <Navigation isSignIn={isSignIn} setIsSignIn={setIsSignIn} />; // Pass isSignIn state and setIsSignIn function as props to Navigation
}

export default App;
