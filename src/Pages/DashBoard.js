import Parse from "parse";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Category from "../Components/Category";
import Container from "react-bootstrap/Container";
import Asset from "../Components/Asset";
import AddCategory from "../Components/AddCategory";
import EditAsset from "../Components/EditAsset";
import NavigationBar from "../Components/NavigationBar";
import TopComponents from "../Components/TopComponents";
import AddCategoryBtn from "../Components/AddCategoryBtn";
import { postCategory, getCategories, postAsset, getAssets } from "../data";

function Dashboard() {
  const navigate = useNavigate();
  //Fetches userId upon start so it's always avaliable in localStorage
  const userId = localStorage.getItem("userId");
  const [categoryId, setCategoryId] = useState("");

  //Manages display of addCategoryComponent upon pressing addCategory and dissapear upon pressing cancel
  const [visibleAddCategory, setVisibleAddCategory] = useState(false);

  //Manages display if addAssetComponent upon pressing addAsset and dissapear upon pressing cancel
  const [visibleAddAsset, setVisibleAddAsset] = useState(false);

  //Manages list of saved categories
  const [categories, setCategories] = useState([]);

  //Manages list of saved assets
  const [assets, setAssets] = useState([]);

  //Saves a category to database by calling postCategory in data.js
  async function saveCategory() {
    try {
      const categoryName = localStorage.getItem("categorySelect");
      await postCategory(categoryName, userId); //Added await
      getCategories(userId, setCategories); //Moved this up hear insted of in useEffect
      setVisibleAddCategory(false);
    } catch (error) {
      console.log("Errors");
    }
  }

  function isRealEstate(){
    const categoryName = localStorage.getItem("categorySelect");
    if (categoryName === 'Real Estate'){
      return true 
    } else { 
      return false 
    }
  }

  function isBankAccount(){
    const categoryName = localStorage.getItem("categorySelect");
    if (categoryName === 'Bank account'){
      return true 
    } else { 
      return false 
    }
  }

  //Saves an asset to database by calling postAsset in data.js
  async function saveAsset() {
    try {
      const assetName = localStorage.getItem("assetName");
      const assetValue = localStorage.getItem("assetValue");
      await postAsset(assetName, assetValue, categoryId); //Added await: HERE (CateoryId comes from state hook - if doesnt work, retireve it from local storage)
      getAssets(categoryId, setAssets); //Moved this up hear insted of in useEffect
      setVisibleAddAsset(false);
    } catch (error) {
      console.log("Errors");
    }
  }

  function addAssetClick(categoryId) {
    console.log("clicked")
    setVisibleAddAsset(true);
    localStorage.setItem("categoryId", categoryId);
    setCategoryId(categoryId);
  }

  //User login/logout related
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    //User login/logout related
    getCurrentUser();
    getCategories(userId, setCategories); //Moved this up hear insted of in useEffect
    getAssets(categoryId, setAssets);
  }, [userId, categoryId]);

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
          <div className="visibleSavedCategory">
            {categories.map((category) => (
              <Category
                key={category.id} //Bug: Doesn't work - not fatal, but creates an error message
                title={category.get("name")}
                eventAddAsset={() => addAssetClick(category.id)} //HERE - changed from: eventAddAsset={() => setVisibleAddAsset(true)
              />
            ))}
          </div>
          <div className="visibleAsset">
            {assets.map((asset) => (
              <Asset key={asset.id} title={asset.get("name")} />
            ))}
          </div>
          <div className="visibleAddAsset">
              {visibleAddAsset ?
                isBankAccount() ?   // Checks if category name is equal Banck account
                      <EditAsset category="bank"   // Renders bank asset
                      eventCancel={() => setVisibleAddAsset(false)}
                      eventSave={() => saveAsset()}
                      /> 
                  :
                  isRealEstate() ?   // Checks if category name is equal real estate
                      <EditAsset category="realestate"    // Renders realestate asset
                        eventCancel={() => setVisibleAddAsset(false)}
                        eventSave={() => saveAsset()}
                      />
                    :   //If category name is neither an 'Bank account' or 'Real estate'.
                      <EditAsset  // Renders normal asset
                        eventCancel={() => setVisibleAddAsset(false)}
                        eventSave={() => saveAsset()}
                      />
                  : //Renders an empty containe, not sure how to implement
                    <div className="Empty container"></div>  
            }
          </div>
          <div className="visibleAddCategory">
            {visibleAddCategory ? (
              <AddCategory
                eventCancel={() => setVisibleAddCategory(false)}
                eventSave={() => saveCategory()}
              />
            ) : (
              <div className="Empty container"></div>
            )}
          </div>
          <br />
          <AddCategoryBtn event={() => setVisibleAddCategory(true)} />
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
