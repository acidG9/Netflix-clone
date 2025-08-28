import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isReg, setIsReg] = useState(true);
  const navigate = useNavigate();

  const bgBanner = "/background_banner.jpg";

  function handleReg() {
    setIsReg(!isReg);
  }

  return (
    <div
      className="login"
      style={{
        backgroundImage: `linear-gradient(#0000007e, #0000007e), url(${bgBanner})`,
      }}
    >
      <img src="logo.png" alt="logo" className="login-logo" />
      <div className="login-form">
        <h1>{isReg ? "Sign In" : "Sign Up"}</h1>
        <form>
          {isReg || <input type="text" placeholder="Your name" />}
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={() => navigate("/home")}>
            {isReg ? "Sign In" : "Sign Up"}
          </button>
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
