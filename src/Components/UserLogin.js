import React, { useState } from "react";
import Parse from "parse";
import { useNavigate } from "react-router-dom";

function UserLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const doUserLogin = async function () {
    const usernameValue = username;
    const passwordValue = password;
    try {
      const loggedInUser = await Parse.User.logIn(usernameValue, passwordValue);
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
  );
}

export default UserLogin;
