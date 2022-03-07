import React, { useEffect, useState } from "react";
import Parse from "parse";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../Components/Logo";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function UserRegistration() {
  const navigate = useNavigate("");
  const [username, setUsername] = useState("");
  const handleChangeUser = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };
  const [password, setPassword] = useState("");
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const [createUser, setCreateUser] = useState(false);

  const doUserRegistration = async function () {
    const usernameValue = username;
    const passwordValue = password;

    return await Parse.User.signUp(usernameValue, passwordValue)
      .then((createdUser) => {
        setCreateUser(true);
        alert(
          "Succes! User " +
            createdUser.getUsername() +
            " was succesfully created!"
        );
        return true;
      })
      .catch((error) => {
        alert("Error caught: ", error);
        return false;
      });
  };

  useEffect(() => {
    if (createUser === true) {
      navigate("/login");
    }
  }, [createUser, navigate]);

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
            Create a user to get started
          </p>
          <TextField
            label="Username"
            value={username}
            onChange={handleChangeUser}
            fullWidth
          />
          <p></p>
          <TextField
            label="Password"
            value={password}
            onChange={handleChangePassword}
            fullWidth
          />
          <br />
          <br />
          <Button
            variant="contained"
            size="large"
            onClick={doUserRegistration}
            sx={{
              backgroundColor: "#18388C",
              color: "white",
            }}
            style={{ fontSize: "12px" }}
          >
            Create user
          </Button>
          <br />
          <br />
          <p style={{ display: "inline-block", paddingRight: "5px" }}>
            Already have a user?
          </p>
          <p
            style={{ display: "inline-block", color: "#18388C" }}
            onClick={() => navigate("/login")}
          >
            <b>Continue to login</b>
          </p>
        </Col>
        <Col className="col-sm-3"></Col>
      </Row>
      <div style={{ minHeight: "250px" }}></div>
    </Container>
  );
}

export default UserRegistration;

/* <div
      className="userregistration"
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className="indmad"
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h2>Create a user to get started</h2>
        <input
          value={username}
          placeholder={"Username"}
          onChange={handleChangeUser}
        ></input>{" "}
        <input
          value={password}
          placeholder={"Password"}
          onChange={handleChangePassword}
        ></input>
        <br />
        <br />
        <button onClick={doUserRegistration}>Create user</button>
        <br />
        <br />
        <p style={{ display: "inline-block" }}>Already have a user?</p>{" "}
        <p
          style={{ display: "inline-block" }}
          onClick={() => navigate("/login")}
        >
          Continue to login
        </p>
      </div>
    </div> */
