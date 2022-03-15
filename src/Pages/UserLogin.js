import React, { useState } from "react";
import Parse from "parse";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../Components/Logo";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function UserLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const doUserLogin = async function () {
    const usernameValue = username;
    const passwordValue = password;
    try {
      const loggedInUser = await Parse.User.logIn(usernameValue, passwordValue);
      localStorage.setItem("userId", loggedInUser.id); //Saves userID to local storage - has to be here
      alert(
        "Success! User " + loggedInUser.get("username") + " has logged in!"
      );
      setUsername("");
      setPassword("");
      navigate("/dashboard");
      return true;
    } catch (error) {
      alert("Error caught: " + error);
      return false;
    }
  };

  return (
    <Container>
      <div style={{ minHeight: "200px" }} />
      <Row>
        <Col className="col-sm-3"></Col>
        <Col className="col-sm-6">
          <Logo style={{ display: "relative", left: "100px" }} />
        </Col>

        <Col className="col-sm-3"></Col>
      </Row>
      <Row style={{}}>
        <Col className="col-sm-3"></Col>
        <Col
          className="bg-white col-sm-6"
          style={{
            margin: "auto",
            minHeight: "400px",
            padding: "50px 150px 50px 50px",
            borderRadius: "3px",
          }}
        >
          <p style={{ fontSize: "30px", color: "#18388C" }}>
            Login to manage you investments
          </p>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
          <p></p>
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <br />
          <br />
          <Button
            variant="contained"
            size="large"
            onClick={doUserLogin}
            sx={{
              backgroundColor: "#18388C",
              color: "white",
            }}
            style={{ fontSize: "12px" }}
          >
            Login
          </Button>
          <br />
          <br />
          <p style={{ display: "inline-block", paddingRight: "5px" }}>
            Don't have a user?
          </p>
          <p
            style={{ display: "inline-block", color: "#18388C" }}
            onClick={() => navigate("/")}
          >
            <b>Create a profile</b>
          </p>
        </Col>
        <Col className="col-sm-3"></Col>
      </Row>
      <div style={{ minHeight: "250px" }}></div>
    </Container>
    /*
    <>
      <h2>Login to continue</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => doUserLogin()} type="primary">
        Log In
      </button>
      <br />
      <br />
      <p style={{ display: "inline-block" }}>Don't have a user?</p>{" "}
      <p style={{ display: "inline-block" }} onClick={() => navigate("/")}>
        Go back and register
      </p>
    </>
    */
  );
}

export default UserLogin;
