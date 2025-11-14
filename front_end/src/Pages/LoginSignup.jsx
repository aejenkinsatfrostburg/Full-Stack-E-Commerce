import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS Sheets/LoginSignup.css';

export const LoginSignup = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });
  const [agreed, setAgreed] = useState(false); // <-- track checkbox

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    if (!agreed) {
      alert("You must agree to the terms and privacy policy.");
      return;
    }

    let responseData;
    await fetch('https://graffiti-streetwear-backend.onrender.com/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    if (!agreed) {
      alert("You must agree to the terms and privacy policy.");
      return;
    }

    let responseData;
    await fetch('https://graffiti-streetwear-backend.onrender.com/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" && (
            <input
              name='username'
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder='Your Name'
            />
          )}
          <input
            name='email'
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder='Email Address'
          />
          <input
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder='Password'
          />
        </div>
        <button onClick={() => (state === "Login" ? login() : signup())}>
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className='loginsignup-login'>
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Login Here</span>
          </p>
        ) : (
          <p className='loginsignup-login'>
            Don't have an account?{" "}
            <span onClick={() => setState("Sign Up")}>Sign Up Here</span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <p>
            I agree to the terms of use and{" "}
            <Link style={{ textDecoration: "none" }} to="/privacypolicy">privacy policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
