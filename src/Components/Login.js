import "./Login.css";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/UserContext";
import GoogleButton from "react-google-button";
import FacebookButton from "react-facebook-login";
import GithubButton from "react-github-login-button";
export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, googleSignIn, facebookSignIn } = useAuthContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);

      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      setError("");
      googleSignIn();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleFacebookLogin = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await facebookSignIn();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <h2 className="title">Login</h2>
        <div className="input-group">
          <label>Username:</label>
          <input className="input" type="text" id="username" ref={emailRef} />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            className="input"
            type="password"
            id="password"
            ref={passwordRef}
          />
        </div>

        <button disabled={loading} type="submit" className="submit">
          Submit
        </button>
      </form>
      <hr />
      <div className="input-group">
        <GoogleButton
          className="g-btn"
          onClick={handleGoogleLogin}
        ></GoogleButton>
      </div>
      <div className="input-group">
        <FacebookButton
          className="submit"
          onClick={handleFacebookLogin}
        ></FacebookButton>
      </div>
      <div className="input-group">
        <GithubButton
          className="submit"
          onClick={handleFacebookLogin}
        ></GithubButton>
      </div>
      <div className="input-group">
        <p className="Para1">
          Dont't Have an Account? <Link to="/signup">Sign Up</Link>{" "}
        </p>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};
