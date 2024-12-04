import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SignupPage() {
  let navigate = useNavigate();
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let loc = useLocation();
  console.log(loc);
  return (
    <div>
      <form>
        <h1 style={{ textShadow: "10px 10px 10px black" }}>Sign up</h1>
        <h4>Sign up to continue</h4>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            placeholder="Enter your First Name"
            ref={firstNameInputRef}
          ></input>
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Enter your Last Name"
            ref={lastNameInputRef}
          ></input>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            placeholder="Enter your Email"
            ref={emailInputRef}
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
        <div>
          <button
            className="buttonType"
            type="button"
            onClick={() => {
              let typedfirstName = "Mahendra singh";
              let typedlastName = "Dhoni";
              let typedEmail = "dhoni@gmail.com";
              let typedPassword = "dhoni";
              if (
                typedfirstName == "Mahendra singh" &&
                typedlastName == "Dhoni" &&
                typedEmail == "dhoni@gmail.com" &&
                typedPassword == "dhoni"
              ) {
                navigate("/welcome");
              } else {
                alert("Invalid details");
              }
            }}
          >
            Sign up
          </button>
        </div>
        <div>
          <input type="checkbox"></input>
          <label className="rememberMe">Remember me</label>
        </div>
        <div>
          <button className="googleButton" type="button">
            Google
          </button>
          <button className="googleButton" type="button">
            LinkedIn
          </button>
          <button className="googleButton" type="button">
            SSO
          </button>
        </div>
        <h2 className="alreadyAccount">Already have account?</h2>
        <div>
          <Link to="/">Login</Link>
        </div>
        <div>
          <Link to="/welcome">Welcome</Link>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
