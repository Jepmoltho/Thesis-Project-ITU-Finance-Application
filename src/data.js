import Parse from "parse";

export async function postCategory(name, userId) {
  try {
    const Category = Parse.Object.extend("Category");
    const thisCategory = new Category();
    thisCategory.set("name", name);
    thisCategory.set("userId", userId);
    //thisCategory.set("userPointer", userPointer); Bug: Doesn't work with pointersl
    await thisCategory.save();
    alert("Saved category to database");
  } catch (error) {}
}

//Another method to retrieve from DB, now that they are saved?
export async function getCategories(userId, setCategories) {
  const parseQuery = new Parse.Query("Category");
  parseQuery.contains("userId", userId);
  try {
    let categories = await parseQuery.find();
    setCategories(categories);
    return categories;
  } catch (error) {
    alert("errors");
    return false;
  }
}

export async function postAsset(assetName, assetValue, categoryId, userId) {
  try {
    const Asset = Parse.Object.extend("Asset");
    const thisAsset = new Asset();
    thisAsset.set("name", assetName);
    thisAsset.set("value", assetValue);
    thisAsset.set("categoryId", categoryId);
    thisAsset.set("userId", userId);
    //thisAsset.set("userPointer", userPointer); Bug: Doesn't work with pointers
    await thisAsset.save();
    alert("Saved asset to database");
  } catch (error) {}
}

function getCatVal(assets) {
  //Map though all asset value here
  let sum = 0;
  //let iteration = 0;
  assets.map((asset) => {
    //console.log(asset[0]);
    //console.log(asset.get("value"));
    sum += parseInt(asset.get("value"));
    //console.log(sum); //Sum contains the int
    //console.log(iteration);
    //iteration++;
    // let value = parseInt(asset.value);
    // sum += value;
    return sum; //If error, check what this does
  });
  //console.log(sum);
  return sum;
}

async function postCatVal(categoryId, value) {
  const Category = Parse.Object.extend("Category");
  const thisCategory = new Category();
  thisCategory.set("objectId", categoryId);
  //Maybe convert value back to string here
  // let stringValue = value.toString();
  //It's because the name is required in the DB
  thisCategory.set("value", value);
  try {
    await thisCategory.save();
    // let result = thisCategory.save();
    //alert(result + " updated category value");
  } catch (error) {
    alert("postCatVal " + error);
  }
}

export async function getAssets(categoryId, userId, setAssets) {
  const parseQuery = new Parse.Query("Asset");
  parseQuery.contains("categoryId", categoryId);
  parseQuery.contains("userId", userId);
  try {
    let assets = await parseQuery.find();
    const catVal = getCatVal(assets);
    //console.log(catVal); HERE - works!!!!
    postCatVal(categoryId, catVal);
    //console.log(assets[0].get("value")); //Maybe call function that sets category value here
    setAssets(assets);
    return assets;
  } catch (error) {
    alert("errors");
    return false;
  }
}

// //Not working: 1st attempt to GET the total value of a category by fetching all assets from database - needs to be imported to work in dashboard
// export async function getCategoryValue(categoryId, userId) {
//   let sum = 0;
//   const parseQuery = new Parse.Query("Asset");
//   parseQuery.contains("categoryId", categoryId);
//   parseQuery.contains("userId", userId);
//   try {
//     let assets = await parseQuery.find();
//     assets.map((asset) => (sum += asset.get("value")));
//   } catch (error) {
//     console.log(error);
//   }
//   return sum;
// }

// //Not working: 2nd attempt to itterate thorugh all the assets in the assets array of dashboard (passed as assets) and then to POST the total value to the category of the database. Notice that the use of ParseInt() is an attempt to solve the issue of storing strings in the database and use them as integers here - needs to be imported to work in dashboard
// export async function postCategoryValue(categoryId, userId, assets) {
//   let sum = 0;
//   //Attempt to iterate thoguh all assetvalues to get sum
//   assets.map((asset) => (sum += parseInt(asset.value)));
//   console.log(sum);
//   try {
//     const Category = Parse.Object.extend("Category");
//     const thisCategory = new Category();
//     //Filtering of right rows in category table goes here
//     thisCategory.set("value", sum);
//   } catch (error) {}
// }
