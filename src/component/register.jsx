import "bootstrap/dist/css/bootstrap.min.css";
import "../component/register.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";



const Register = () => {
  let [inputEmail, setInputEmail] = useState("");
  let [inputPassword, setInputPassword] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();

 
  function formHandler() {
    if (inputEmail.length > 8 && inputPassword.length > 8) {
      localStorage.setItem("username", inputEmail.trim());
      navigate("/");
        
    } else {
      setErrorMessage("Please enter valid information.");
    }
  }

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            value={inputEmail}
            onChange={(e) => {
              const value = e.target.value;
              setInputEmail(value);
            }}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Never share your username with others.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={inputPassword}
            onChange={(e) => {
              const value = e.target.value;
              setInputPassword(value);
            }}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button onClick={formHandler} type="button" className="btn btn-primary">
          Register
        </button>

        <p className="pRegister">{errorMessage}</p>
      </form>
    </div>
  );
};

export default Register;
