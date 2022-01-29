import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const { loginWithGoogle, login, isLoading } = useAuth();
  const [loginData, setLoginData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    // Login functionality here
    console.log(loginData);
    login(loginData);
    e.preventDefault();
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} sx={{ mt: 20 }}>
          <Typography variant="h4">Please Login</Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              label="Your Email"
              type="email"
              name="email"
              onBlur={handleOnBlur}
              sx={{ width: "70%", m: "auto" }}
              variant="standard"
            />
            <TextField
              label="Your Password"
              type="password"
              name="password"
              onBlur={handleOnBlur}
              sx={{ width: "70%", m: "auto" }}
              variant="standard"
            />
            <br /> <br />
            <Button
              type="submit"
              style={{
                backgroundColor: "#0B1C2E",
                textAlign: "left",
                marginBottom: "15px",
              }}
              variant="contained"
            >
              Login
            </Button>
          </form>
          <Button
            onClick={loginWithGoogle}
            style={{
              backgroundColor: "white",
              textAlign: "left",
              marginBottom: "15px",
              color: "red",
              width: "100%",
              margin: "15px 0",
            }}
            variant="contained"
          >
            Google
          </Button>{" "}
          <br />
          <NavLink
            style={{ textDecoration: "none", fontWeight: 600 }}
            to="/Registration"
          >
            New User? Please Register
          </NavLink>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img
            width="90%"
            height="500px"
            src="https://www.horseproperty.com.au/agencyadmin/assets/img/login.png"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
