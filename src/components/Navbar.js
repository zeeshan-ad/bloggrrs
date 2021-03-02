import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./logo.svg";
import "./Navbar.css";
const Navbar = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    emailError,
    passwordError
  } = props;

  const [signinPopup, setSigninPopup] = useState(false);
  const [signupPopup, setSignupPopup] = useState(false);
  const [authOption, setAuthOption] = useState(false);

  const toggleSigninPopup = () => {
    setSigninPopup(!signinPopup);
    setAuthOption(true);
  };
  const toggleSignupPopup = () => {
    setSignupPopup(!signupPopup);
    setAuthOption(true);
  };

  const toggleSwitch = () => {
    setSigninPopup(!signinPopup);
    setSignupPopup(!signupPopup);
  };

  const toggleAuthLogin = () => {
    setAuthOption(!authOption);
  };

  return (
    <div className="Navbar">
      <div className="Logo">
        <a>
          <img src={logo} />
        </a>
      </div>
      <div className="Menu">
        <a onClick={toggleSigninPopup} className="a" id="signin">
          Sign in
        </a>
        <a onClick={toggleSignupPopup} className="Button" to="">
          Get Started
        </a>
      </div>

      {signinPopup ? (
        <div className="popup">
          <div className="inner-pop">
            <div className="cross">
              <FontAwesomeIcon icon="times" onClick={toggleSigninPopup} />
            </div>
            {authOption ? (
              <div id="auth-options">
                <h2>Welcome back</h2>
                <a className="Button2">
                  <FontAwesomeIcon
                    className="icons"
                    icon={["fab", "google"]}
                    style={{ color: "#E14133" }}
                  />
                  Sign in with google
                </a>
                <a className="Button2">
                  <FontAwesomeIcon
                    className="icons"
                    icon={["fab", "facebook"]}
                    style={{ color: "#385498" }}
                  />
                  Sign in with facebook
                </a>
                <a className="Button2" onClick={toggleAuthLogin}>
                  <FontAwesomeIcon className="icons" icon="envelope" />
                  Sign in with email
                </a>
                <p>
                  Don't have an account?{" "}
                  <a onClick={toggleSwitch} className="a">
                    Sign up
                  </a>
                </p>
              </div>
            ) : (
              <div id="viaEmail">
                <h2>Sign in</h2>
                <p>Enter your email and passsword to sign in with Bloggrrs.</p>
                <form>
                  <input
                    type="text"
                    placeholder="Enter your email."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <p className="errMsg">{emailError}</p>
                  <input
                    type="password"
                    placeholder="Enter your password."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <p className="errMsg">{passwordError}</p>
                  <input
                    type="submit"
                    onSubmit={(e) => e.preventDefault()}
                    onClick={handleLogin}
                    value="Continue"
                  />
                </form>
                <a onClick={toggleAuthLogin} className="a">
                  Go back
                </a>
              </div>
            )}
          </div>
        </div>
      ) : null}

      {signupPopup ? (
        <div className="popup">
          <div className="inner-pop">
            <div className="cross">
              <FontAwesomeIcon icon="times" onClick={toggleSignupPopup} />
            </div>
            {authOption ? (
              <div id="auth-options">
                <h2>Get Started</h2>
                <a className="Button2">
                  <FontAwesomeIcon
                    className="icons"
                    icon={["fab", "google"]}
                    style={{ color: "#E14133" }}
                  />
                  Sign up with google
                </a>
                <a className="Button2">
                  <FontAwesomeIcon
                    className="icons"
                    icon={["fab", "facebook"]}
                    style={{ color: "#385498" }}
                  />
                  Sign up with facebook
                </a>
                <a onClick={toggleAuthLogin} className="Button2">
                  <FontAwesomeIcon className="icons" icon="envelope" />
                  Sign up with email
                </a>
                <p>
                  Already have an account?{" "}
                  <a onClick={toggleSwitch} className="a">
                    Sign in
                  </a>
                </p>
              </div>
            ) : (
              <div id="viaEmail">
                <h2>Sign up</h2>
                <p>Enter your email and password to sign up to Bloggrrs.</p>
                <form>
                  <input
                    type="text"
                    placeholder="Enter your email."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <p className="errMsg">{emailError}</p>
                  <input
                    type="password"
                    placeholder="Enter your password."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <p className="errMsg">{passwordError}</p>
                  <input
                    type="submit"
                    onSubmit={(e) => e.preventDefault()}
                    onClick={handleSignup}
                    value="Continue"
                  />
                </form>
                <a onClick={toggleAuthLogin} className="a">
                  Go back
                </a>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
