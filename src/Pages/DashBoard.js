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
import { set } from "parse/lib/browser/CoreManager";

function Dashboard() {
  const navigate = useNavigate();
  //Fetches userId upon start so it's always avaliable in localStorage
  const userId = localStorage.getItem("userId");
  const [categoryId, setCategoryId] = useState("");

  //Manages display of addCategoryComponent upon pressing addCategory and dissapear upon pressing cancel
  const [visibleAddCategory, setVisibleAddCategory] = useState(false);

  
  //Manages list of saved categories
  const [categories, setCategories] = useState([]);
  // [{
    // categoryId: categoryId,
    // isVisible: false
    // }]
    
    
    
    // console.log(visibleAddAsset[])
    // console.log("categoryId: = " + categoryId)
    // console.log("visible.categoryId = " + visibleAddAsset.categoryId)
    // console.log("categories = " + categories.map(e => console.log(e)))
    
    
    // console.log(initVisibleAddAsset())
    // console.log("Array length = " + visibleAddAsset.length)
    
    
    //Manages list of saved assets
    const [assets, setAssets] = useState([]);
    
    //Saves a category to database by calling postCategory in data.js
    async function saveCategory() {
      try {
        const categoryName = localStorage.getItem("categorySelect");
        await postCategory(categoryName, userId); //Added await
        getCategories(userId, setCategories); //Moved this up hear insted of in useEffect
        getAssets(categoryId, userId, setAssets);
        setVisibleAddCategory(false); 
        
        // setVisibleAddAsset( visibleAddAsset.push({
          //   categoryId: categoryId,
          //   isVisible: false
          // }))
          
        } catch (error) {
          console.log("Errors");
        } 
      }
      // console.log(categories)  
      //Manages display if addAssetComponent upon pressing addAsset and dissapear upon pressing cancel
      const [visibleAddAsset, setVisibleAddAsset] = useState([]);
      
      // initVisibleAddAsset()
      console.log(visibleAddAsset)
      
      function initVisibleAddAsset(){
        
          const arr = []
          for (let i = 0; i < categories.length; i++) {
          const catId = categories[i].id
          const isVis = false
          const newElem = {
            categoryId: catId,
            isVisible: isVis
          }
          arr.push(newElem)
        }
        // console.log(arr)
        // setVisibleAddAsset(arr)
        // return arr
      


          // const arr = []
        //   for (let i = 0; i < categories.length; i++) {
        //     const catId = categories[i].id
        //     const isVis = false
        //     const newElem = {
        //       categoryId: catId,
        //     isVisible: isVis
        //   }
        //   setVisibleAddAsset(prevArray => {
        //     return [...prevArray, newElem ]
        //   })
        // }
        console.log(visibleAddAsset)
      }


  // console.log("Array length = " + visibleAddAsset.length)
  // console.log (visibleAddAsset)
  useEffect(() => {
    initVisibleAddAsset() 
    // console.log(visibleAddAsset)
  }, []); 

  // console.log(visibleAddAsset)

  //Saves an asset to database by calling postAsset in data.js
  async function saveAsset() {
    try {
      const assetName = localStorage.getItem("assetName");
      const assetValue = localStorage.getItem("assetValue");
      //const testAssetValue = assetValue + 100;
      await postAsset(assetName, assetValue, categoryId, userId); //Added await
      getAssets(categoryId, userId, setAssets); //This gets all assets related to a certain category - maybe use it to solve the issue of calculating total value of a category, since it returns all relevant assets: const assetsInCategory = getAssets(categoryId, userId, setAssets);
      //await postCategoryValue(categoryId, userId, assetsInCategory); //HERE!
      
      // setVisibleAddAsset(false); //----------DEAL HERE-----------
    } catch (error) {
      console.log("Errors");
    }
  }


  // useEffect(() => {
  //   if (initVisibleAddAsset()) {
  //     setVisibleAddAsset(initVisibleAddAsset());
  //   }
  //   console.log("rendering ")
  // }, [initVisibleAddAsset()])

  // console.log(visibleAddAsset)

  //Nessesary functon that wraps function calls that needs to happen in a specific order in order to save the relevant categoryId to local storage after clicking addAsset
  function addAssetClick(categoryId) {
    console.log("clicked")

    // setVisibleAddAsset(true); //----------DEAL HERE-----------
    localStorage.setItem("categoryId", categoryId);
    setCategoryId(categoryId);

    getAssets(categoryId, userId, setAssets);
    // console.log(visibleAddAsset)

    // initVisibleAddAsset()
    // initVisibleAddAsset()
    // console.log(visibleAddAsset)
    // setVisibleAddAsset(initVisibleAddAsset())

    // setVisibleAddAsset(prevAsset => {
    //   return prevAsset.map( elem => {
    //     return elem.categoryId === categoryId ? {...elem, isVisible: true} : elem
    //   } )
    // })
    
    // console.log(visibleAddAsset)
  
    //   function toggle(id) {
  //     setSquares(prevSquares => {
  //         return prevSquares.map((square) => {
  //             return square.id === id ? {...square, on: !square.on} : square
  //         })
  //     })
  // }
    
    // if (categoryId === visibleAddAsset.categoryId)
    // console.log(categories[0].id)
    // console.log(categoryId)
    // categories.map(cat => cat.id === categoryId ? console.log(cat.id):console.log("NOT"))

    // console.log(initVisibleAddAsset())
    // console.log(visibleAddAsset)
    // console.log(categories)
    
    // categories.map(cat =>  
    //   cat.id === categoryId ?
    //     setVisibleAddAsset( prevVisible => ({
    //         ...prevVisible,
    //         isVisible: !prevVisible.isVisible
    //       }))
    //     : 
    //     null 
    // )

  }

  //User login/logout related
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    //User login/logout related
    getCurrentUser();
    getCategories(userId, setCategories); //Moved this up hear insted of in useEffect
    getAssets(categoryId, userId, setAssets);
    // initVisibleAddAsset()
    // console.log(c)
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
                key={category.id} // key is not a prop. Trying to access it will result in `undefined`. 
                categoryId={category.id} // Created categoryId to access hte prop in asset.
                title={category.get("name")} 
                // value={() => getCategoryValue(category.id, userId)}
                // value={() => calculateCategoryValue(assets, category.id)}
                eventAddAsset={() => addAssetClick(category.id)} //HERE - changed from: eventAddAsset={() => setVisibleAddAsset(true)
                assets={assets}
                visibleAddAsset={visibleAddAsset} //----------DEAL HERE-----------
              />
            ))}
            
          </div>
          
          {/*
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
          */}
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

  // Not working: Attempt at calculating total value of category locally
  // function calculateCategoryValue(assets, categoryId) {
  //   let sum = 0;
  //   assets.forEach((asset) => {
  //     if (asset.categoryId === categoryId) {
  //       sum += asset.value;
  //     }
  //   });
  //   return sum;
  //   console.log(sum);
  //   // if (asset.categoryId === categoryId) {
  //   //   sum += asset.value;
  //   // }
  //   // return sum;
  // }

  // Not working: Attempt at implementing a sorting algorithm component to display categories and assets in the right order
  // function displayCategoriesAndAssets2(categories, assets) {
  //   //User filter and map methods (lambdas)
  //   //const categoriesAndAssets = categories + assets;
  //   // const sorted = categories.forEach((category) => {
  //   //   if (category.id === assets.categoryId)
  //   // });
  //   // const sorted = assets.forEach((asset) => {
  //   //   if (asset.categoryId === categoryId.categoryId)
  //   // });

  //   return <div class="categoriesAndAssets"></div>;
  // }



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
