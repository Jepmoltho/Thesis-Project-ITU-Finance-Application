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
import { postCategory } from "../data";

function Dashboard() {
  const navigate = useNavigate();
  //Fetches userId upon start so it's always avaliable in localStorage
  const userId = localStorage.getItem("userId");

  //Manages display of addCategoryComponent upon pressing addCategory and dissapear upon pressing cancel
  const [visible, setVisible] = useState(false);

  //Saves a category to database by calling postCategory in data.js
  async function saveCategory() {
    try {
      const categoryName = localStorage.getItem("categorySelect");
      postCategory(categoryName, userId);
    } catch (error) {
      console.log("Errors");
    }
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

  //Bug: Doesn't work with userPointer
  // var userPointer = {
  //   __type: "Pointer",
  //   className: "User",
  //   objectId: userId,
  // };

  //Not used yet: Think they are gonna be used to update category list after each new creation
  // const [readResults, setReadResults] = useState("");
  // const readCategories = async function () {
  //   const parseQuery = new Parse.Query("Category");
  //   try {
  //     let categories = await parseQuery.find();
  //     setReadResults(categories);
  //     return true;
  //   } catch (error) {
  //     alert("Error");
  //     return false;
  //   }
  // };

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
          <div className="visibleAddCategory">
            {visible ? (
              <AddCategory
                eventCancel={() => setVisible(false)}
                eventSave={() => saveCategory()}
              />
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
OLD catagory map component
 {{categoryComponents.map((item, i) => (
            <Category />
          ))}
          <br />
          {addCategoryComponents.map((item, i) => (
            <AddCategory
              eventSave={addCategoryComponent}
              eventCancel={cancelAddCategoryComponent}
            />
          ))}}
          <br />
          {<AddCategoryBtn event={addAddCategoryComponent} /> }



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




            // console.log(UserPointer);

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

  // const readTodos = async function () {
  //   // Reading parse objects is done by using Parse.Query
  //   const parseQuery = new Parse.Query('Todo');
  //   try {
  //     let todos = await parseQuery.find();
  //     // Be aware that empty or invalid queries return as an empty array
  //     // Set results to state variable
  //     setReadResults(todos);
  //     return true;
  //   } catch (error) {
  //     // Error can be caused by lack of Internet connection
  //     Alert.alert('Error!', error.message);
  //     return false;
  //   };
  // };

    // const updateTodo = async function (todoId, done) {
  //   // Create a new todo parse object instance and set todo id
  //   let Todo = new Parse.Object('Todo');
  //   Todo.set('objectId', todoId);
  //   // Set new done value and save Parse Object changes
  //   Todo.set('done', done);
  //   try {
  //     await Todo.save();
  //     // Success
  //     Alert.alert('Success!', 'Todo updated!');
  //     // Refresh todos list
  //     readTodos();
  //     return true;
  //   } catch (error) {
  //     // Error can be caused by lack of Internet connection
  //     Alert.alert('Error!', error.message);
  //     return false;
  //   };
  // };
*/
