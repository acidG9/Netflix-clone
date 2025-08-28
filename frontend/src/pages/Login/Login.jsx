import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [isReg, setIsReg] = useState(true);

  function handleReg() {
    setIsReg(!isReg);
  }

  return (
    <div className="login">
      <img src="logo.png" alt="logo" className="login-logo" />
      <div className="login-form">
        <h1>{isReg ? "Sign In" : "Sign Up"}</h1>
        <form>
          {isReg || <input type="text" placeholder="Your name" />}
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>{isReg ? "Sign In" : "Sign Up"}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {isReg ? (
            <p>
              New to Netflix <span onClick={handleReg}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have a Account <span onClick={handleReg}>Sign In</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
