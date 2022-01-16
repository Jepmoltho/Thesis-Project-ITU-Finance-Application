import React, { useState } from "react";
import Parse from "parse";
import { useNavigate } from "react-router-dom";
//import Dashboard from "./Dashboard";

function UserLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [currentUser, setCurrentUser] = useState(null);

  // // Function that will return current user and also update current username
  // const getCurrentUser = async function () {
  //   const currentUser = await Parse.User.current();
  //   // Update state variable holding current user
  //   setCurrentUser(currentUser);
  //   return currentUser;
  // };

  const doUserLogin = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = username;
    const passwordValue = password;
    try {
      const loggedInUser = await Parse.User.logIn(usernameValue, passwordValue);
      //logIn returns the corresponding ParseUser object
      alert(
        "Success! User " + loggedInUser.get("username") + " has logged in!"
      );
      // To verify that this is in fact the current user, `current` can be used
      // const currentUser = await Parse.User.current();
      // setCurrentUser(currentUser);
      // console.log(loggedInUser === currentUser);
      setUsername("");
      setPassword("");
      navigate("/dashboard");
      // Update state variable holding current user
      // getCurrentUser();
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
