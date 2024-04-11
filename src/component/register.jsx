import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography } from "@mui/material";

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
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <form sx={{ textAlign: "center" }}>
        <div sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Username
          </Typography>
          <TextField
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            type="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
            Never share your username with others.
          </Typography>
        </div>
        <div sx={{ mb: 3 }}>
          <Typography variant="h6">Password</Typography>
          <TextField
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            type="password"
            id="exampleInputPassword1"
          />
        </div>

        <Button
          onClick={formHandler}
          variant="contained"
          color="primary"
          sx={{ mb: 1 }}
        >
          Register
        </Button>

        <Typography variant="body1" sx={{ color: "red" }}>
          {errorMessage}
        </Typography>
      </form>
    </div>
  );
};

export default Register;
