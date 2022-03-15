import Parse from "parse";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Category from "../Components/Category";
import Container from "react-bootstrap/Container";
//import Asset from "../Components/Asset";
import AddCategory from "../Components/AddCategory";
//import EditAsset from "../Components/EditAsset";
import NavigationBar from "../Components/NavigationBar";
import TopComponents from "../Components/TopComponents";
import AddCategoryBtn from "../Components/AddCategoryBtn";

function Dashboard(props) {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  // const [categoryComponents, setCategoryComponents] = useState([""]);
  // function addCategoryComponent() {
  //   setCategoryComponents([...categoryComponents, ""]);
  // }
  // //https://upmostly.com/tutorials/calling-a-react-component-on-button-click
  // //Note to self: Empty string is needed to compile - its an array of strings. Think you can use it to pass props - read link above
  // const [addCategoryComponents, setAddCategoryComponents] = useState([""]);
  // function addAddCategoryComponent() {
  //   setAddCategoryComponents([...addCategoryComponents, ""]);
  // }
  // //Bug: Removes all addCategory
  // function cancelAddCategoryComponent() {
  //   setAddCategoryComponents([...addCategoryComponents.pop(), ""]);
  // }

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
          {/* {categoryComponents.map((item, i) => (
            <Category />
          ))}
          <br />
          {addCategoryComponents.map((item, i) => (
            <AddCategory
              eventSave={addCategoryComponent}
              eventCancel={cancelAddCategoryComponent}
            />
          ))} */}
          <br />
          {/* <AddCategoryBtn event={addAddCategoryComponent} /> */}
          <br />
          <div className="visibleAddCategory">
            {visible ? (
              <AddCategory eventCancel={() => setVisible(false)} />
            ) : (
              <div className="Empty container"></div>
            )}
          </div>
          <br />
          <AddCategoryBtn event={() => setVisible(true)} />
          <br />
          <button onClick={doUserLogOut}>Logout</button>
        </Container>
      </div>
    );
  }
}

export default Dashboard;

/*
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
