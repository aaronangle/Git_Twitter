import React, { useState } from "react";
import { Register } from "components/Register";
import { Login } from "components/Login";
export const Landing = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <h1>Join Tweeter Today</h1>
      <button className="button-primary" onClick={() => setShowRegister(true)}>
        Register
      </button>
      <button className="button-primary" onClick={() => setShowLogin(true)}>
        Login
      </button>
      {showLogin && <Login />}
      {showRegister && <Register />}
    </div>
  );
};
