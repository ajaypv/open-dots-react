import "./Login.css";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/UserContext";

export const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const { signUp } = useAuthContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmRef.current.value) {
      return setError("Password Doesn't Match");
    }
    try {
      setError(" ");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <h1 className="title">Sign Up</h1>
        <div className="input-group">
          <label>Username:</label>
          <input className="input" type="text" ref={emailRef} />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input className="input" type="password" ref={passwordRef} />
        </div>
        <div className="input-group">
          <label>Confirm Password: </label>
          <input className="input" type="password" ref={confirmRef} />
        </div>
        <div>
          <button disabled={loading} className="submit" type="submit">
            Submit
          </button>
        </div>
        <div className="input-group">
          <p className="para1">
            {" "}
            Alredy have an Account <Link to="/">Login</Link>
          </p>
        </div>
      </form>

      {error && <div className="error">{error}</div>}
    </div>
  );
};
