import Parse from "parse";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import Category from "../Components/Category";
import Container from "react-bootstrap/Container";
//import Asset from "../Components/Asset";
import AddCategory from "../Components/AddCategory";
//import EditAsset from "../Components/EditAsset";
import NavigationBar from "../Components/NavigationBar";
import TopComponents from "../Components/TopComponents";
import AddCategoryBtn from "../Components/AddCategoryBtn";

function Dashboard() {
  const navigate = useNavigate();

  //const [categoryList, setCategoryList] = useState([]);
  // const [state, setState] = useState("off");
  // function handleChangeState() {
  //   setState("on");
  // }
  // function addCategory() {
  //   if (state === "on") {
  //     return <AddCategory />;
  //   } else return <AddCategory />;
  // }

  //const [components, setComponents] = useState(["Sample Component"]);
  const [components, setComponents] = useState(["Sample Component"]);

  const MyButton = (props) => {
    return (
      <button className="AddButton" onClick={props.onClick}>
        activate
      </button>
    );
  };

  function addComponent() {
    //setComponents([...components, "Sample Component"])
    setComponents([...components, "Sample Component"]);
  }

  //User login/logout related
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    //User login/logout related
    getCurrentUser();
  }, []);

  //User login/logout related
  async function getCurrentUser() {
    const currentUser = await Parse.User.current();
    setCurrentUser(currentUser);
    return currentUser;
  }

  //User login/logout related
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
      <div>
        <NavigationBar />
        <Container>
          <h2>Welcome {currentUser.get("username")}</h2>
          <TopComponents />
          <br />
          {components.map((item, i) => (
            <AddCategory />
          ))}
          <br />
          <button onClick={addComponent}>Add component</button>
          <AddCategoryBtn />
          <br />
          <button onClick={doUserLogOut}>Logout</button>
        </Container>
      </div>
    );
  }
}

export default Dashboard;

/*
{state === "off" && <AddCategory />}


<Category title="Stocks" />
          <br />
          <AddCategory type="automatic" />
          <br />
          <AddCategory type="manual" />
          <br />
          <Asset normal />
          <br />
          <Asset debt />
          <br />
          <Asset realestate />
          <br />
          <EditAsset />
          <br />
          <EditAsset realestateman />
          <br />
          <EditAsset realestateauto />
          <br />
          <EditAsset bankman />
          <br />
          <EditAsset bankauto />
*/
