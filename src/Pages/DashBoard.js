import Parse from "parse";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Category from "../Components/Category";
import Container from "react-bootstrap/Container";
import Asset from "../Components/Asset";

function Dashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getCurrentUser();
  }, []);

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
      navigate("/");
      return true;
    } catch (error) {
      alert("Error caught: ", error);
      return false;
    }
  };

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
      <Container>
        <h2>Welcome {currentUser.get("username")}</h2>
        <br />
        <Category title="Stocks" />
        <Asset />
        <br />
        <button onClick={doUserLogOut}>Logout</button>
      </Container>
    );
  }
}

export default Dashboard;
