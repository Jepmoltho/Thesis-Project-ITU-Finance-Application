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
    alert("Saved asset to database");
    return await thisAsset.save();

    // return thisAsset;
  } catch (error) {}
}

export async function postAssetRealestateM2(
  assetName,
  m2,
  priceprm2,
  value,
  categoryId,
  userId
) {
  try {
    const Asset = Parse.Object.extend("Asset");
    const thisAsset = new Asset();
    thisAsset.set("name", assetName);
    thisAsset.set("m2", m2);
    thisAsset.set("pricePrM2", priceprm2);
    thisAsset.set("value", value);
    thisAsset.set("categoryId", categoryId);
    thisAsset.set("userId", userId);
    //thisAsset.set("userPointer", userPointer); Bug: Doesn't work with pointers
    alert("Saved asset to database");
    return await thisAsset.save();
  } catch (error) {
    alert("Error caught in postAssetRealestateM2 " + error);
  }
}

export async function postCatVal(categoryId, value) {
  const Category = Parse.Object.extend("Category");
  const thisCategory = new Category();
  thisCategory.set("objectId", categoryId);
  thisCategory.set("value", value);
  try {
    await thisCategory.save();
    console.log("Saved category value to DB");
    return thisCategory;
  } catch (error) {
    console.log(
      "Error in postCatVal(): This is a tempoary solution: Cannot post a category without a name. You cannot make the name field not mandatory, because then it posts a new category without name everytime the page rerenders " +
        error
    );
  }
}

export async function getAsset(isAsset, categoryId, userId, setLastAddedAsset) {
  const parseQuery = new Parse.Query("Asset");
  // parseQuery.contains("categoryId", categoryId);
  if (isAsset) {
    parseQuery.contains("objectId", categoryId);
  } else {
    parseQuery.contains("categoryId", categoryId);
  }
  parseQuery.contains("userId", userId);
  try {
    let assets = await parseQuery.find();

    setLastAddedAsset((prev) => [...prev, assets]);

    return assets;
  } catch (error) {
    alert("errors");
    return false;
  }
}

export async function getAssets(isAsset, categoryId, userId, setAssets) {
  const parseQuery = new Parse.Query("Asset");
  // parseQuery.contains("categoryId", categoryId);
  if (isAsset) {
    parseQuery.contains("objectId", categoryId);
  } else {
    parseQuery.contains("categoryId", categoryId);
  }
  parseQuery.contains("userId", userId);
  try {
    let assets = await parseQuery.find();
    setAssets((prev) => assets);

    return assets;
  } catch (error) {
    alert("errors");
    return false;
  }
}

//Deletes an asset
export async function deleteAsset(assetId) {
  const Asset = new Parse.Object("Asset");
  Asset.set("objectId", assetId);
  try {
    await Asset.destroy();
    //saveCatValue();
    alert("Success! Asset " + assetId + " deleted");
    return true;
  } catch (error) {
    alert("Error " + error + " caught");
    return false;
  }
}

//Supposed to be the update function - right now it's just a slightly different delete function
export async function putAsset(assetId, newName, newValue) {
  const Asset = new Parse.Object("Asset");
  Asset.set("objectId", assetId);
  Asset.set("name", newName);
  Asset.set("value", newValue);
  try {
    await Asset.save();
    alert(assetId + " updated");
    return true;
  } catch (error) {
    alert("Error in putAsset " + error);
    return false;
  }
}

// Updating Goal
export async function putGoal(userId, newGoal) {
  const User = new Parse.Object.extend("User");
  const user = new User();
  user.set("objectId", userId);
  user.set("goal", newGoal);
  try {
    await user.save();
    alert(userId + " updated");
    return true;
  } catch (error) {
    alert("Error in putGoal " + error);
    return false;
  }
}

// Updating category
export async function putCategory(categoryId, userId, newName) {
  const Category = new Parse.Object.extend("Category");
  const cat = new Category();
  cat.set("objectId", categoryId);
  cat.set("userId", userId);
  cat.set("name", newName);
  try {
    await cat.save();
    alert(cat + " updated");
    return true;
  } catch (error) {
    alert("Error in putCategory " + error);
    return false;
  }
}

// Getting Goal
export async function getGoal(userId, setGoal) {
  const parseQuery = new Parse.Query("User");
  parseQuery.contains("objectId", userId);
  try {
    let goalValue = await parseQuery.find();
    let goal = goalValue.map((e) => e.get("goal"));
    setGoal(goal[0]);
    console.log(goal[0]);
  } catch {
    alert("error in getGoal");
    return false;
  }
}

//Delete category - Need to delete from both category table and asset table: //Note: Doesn't work but it only affects the database by not removing assets connected to a category after the category have been deleted. It doesn't affect the user experience. Need to figure out a way to loop though all assets with a given categoryId and destroy them. Left the comments in for illustration
export async function deleteCategory(categoryId) {
  // const Asset = new Parse.Object("Asset");
  // Asset.set("categoryId", categoryId);
  const Category = new Parse.Object("Category");
  Category.set("objectId", categoryId);
  try {
    // await Asset.destroy();
    // alert("Asset destroyed");
    await Category.destroy();
    alert("Category destroyed");
    return true;
  } catch (error) {
    alert("Error caught in deleteCategory " + error);
    return false;
  }
}

export async function getHistoricNetworth(userId, setHistoricNetworth) {
  const parseQuery = new Parse.Query("HistoricNetworth");
  parseQuery.contains("userId", userId);
  try {
    let netWorthValues = await parseQuery.find();
    setHistoricNetworth(netWorthValues);
    return netWorthValues;
  } catch {
    alert("error in getHistoricNetworth");
    return false;
  }
}

export async function postHistoricNetworth(userId, networth, date) {
  try {
    const HistoricNetworth = new Parse.Object.extend("HistoricNetworth");
    const thisHistoricNetworth = new HistoricNetworth();
    thisHistoricNetworth.set("userId", userId);
    thisHistoricNetworth.set("networth", networth);
    thisHistoricNetworth.set("date", date);
    await thisHistoricNetworth.save();
    //alert("Historic Network saved")
  } catch {
    alert("error in postHistoricNetwork");
  }
}

//
//Gets the category value for specific assets
function getCatVal(assets) {
  console.log("getCatCal called");
  let sum = 0; //Note: Techincal debt - there is no reason we are not just treating assets as numbers/ints consistently
  assets.map((asset) => {
    sum += parseInt(asset.get("value"));
    return sum;
  });
  return sum;
}

//Handles saving updates to categoryValues each time a new asset is added
export async function saveCatValue() {
  const categoryId = localStorage.getItem("categoryId");
  const userId = localStorage.getItem("userId");
  const parseQuery = new Parse.Query("Asset");
  parseQuery.contains("categoryId", categoryId);
  parseQuery.contains("userId", userId);
  try {
    let assets = await parseQuery.find();
    const catVal = getCatVal(assets);
    let postCatValue = await postCatVal(categoryId, catVal);
    console.log("postCatValue = " + postCatValue);
  } catch (error) {
    console.log("Error in saveCatVal: " + error);
  }
}

// export async function getNoOfAssetsPrCategory(userId, categoryId) {
//   const parseQuery = new Parse.Query("Asset");
//   parseQuery.contains("categoryId", categoryId);
//   parseQuery.contains("userId", userId);
//   try {
//     let assets = await parseQuery.find();
//     let noOfAssets = assets.length;
//     return noOfAssets;
//   } catch (error) {
//     alert("Error in getNoOfAssetsPrCategory " + error);
//   }
// }

//Updating assets and categories attempt: Doesnt work for now: Suprinsingly complex problem.
// export async function putAsset(assetId, assetName, assetValue) {
//   let Asset = new Parse.Object("Asset");
//   Asset.set("objectId", assetId);
//   Asset.set("name", assetName);
//   Asset.set("value", assetValue);
//   try {
//     await Asset.save();
//     alert(assetId + " updated");
//     return true;
//   } catch (error) {
//     alert("Error " + error);
//     return false;
//   }
// }
