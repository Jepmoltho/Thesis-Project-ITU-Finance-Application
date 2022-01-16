import Parse from "parse";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [logOut, setLogOut] = useState(false);

  useEffect(() => {
    //setTimeout(console.log("Timeout", 1000));
    getCurrentUser();
  }, [logOut]);

  async function getCurrentUser() {
    const currentUser = await Parse.User.current();
    setCurrentUser(currentUser);
    return currentUser;
  }

  const doUserLogOut = async function () {
    try {
      await Parse.User.logOut();
      // To verify that current user is now empty, currentAsync can be used
      const currentUser = await Parse.User.current();
      if (currentUser === null) {
        alert("Succesfully logged out!");
      }
      setLogOut(true);
      // Update state variable holding current user
      getCurrentUser();
      return true; //Why do we need to return true and false in theese funcitons at the end?
    } catch (error) {
      alert("Error caught: ", error);
      return false; //Why do we need to return true and false in theese funcitons at the end?
    }
  };

  if (logOut === true) {
    return (
      <>
        <p>Logging out - please hold</p>
        {navigate("/")}
      </>
    );
  }
  if (currentUser === null) {
    //Nessesary, otherwise it crashes
    return (
      <>
        <p>Logging in - please hold</p>
      </>
    );
  }
  if (currentUser !== null) {
    return (
      <>
        {/* <h2>Welcome{currentUser.get("username")}</h2> */}
        <h2>Welcome {currentUser.get("username")}</h2>
        <br />
        <br />
        <button onClick={doUserLogOut}>Logout</button>
      </>
    );
  }
}

export default DashBoard;
