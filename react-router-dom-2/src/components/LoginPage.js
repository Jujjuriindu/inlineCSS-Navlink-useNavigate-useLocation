import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

function LoginPage() {
  let navigate = useNavigate();
  let usernameInputRef = useRef();
  let passwordInputRef = useRef();
  return (
    <div>
      <Navigation></Navigation>
      <form>
        <h1 style={{ textShadow: "10px 10px 10px black" }}>Login</h1>
        <div>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter your Username"
            ref={usernameInputRef}
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your Password"
            ref={passwordInputRef}
          ></input>
        </div>
        <h4>Forget Password?</h4>
        <div>
          <button
            className="loginButton"
            type="button"
            onClick={() => {
              let typedUserName = usernameInputRef.current.value;
              let typedPassword = passwordInputRef.current.value;
              if (
                typedUserName == "dhoni@gmail.com" &&
                typedPassword == "dhoni"
              ) {
                navigate("/signup", {
                  state: { team: "India", role: "Captain,Batter" },
                });
              } else {
                alert("Invalid username or password");
              }
            }}
          >
            Login
          </button>
        </div>
        <h4>Not a Member ? </h4>
        <div>
          <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
