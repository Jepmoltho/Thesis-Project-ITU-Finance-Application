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
    await thisAsset.save();
    alert("Saved asset to database");
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
  // let valueCalc = m2 * priceprm2;
  // console.log(valueCalc);
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
    await thisAsset.save();
    alert("Saved asset to database");
  } catch (error) {
    alert("Error caught in postAssetRealestateM2 " + error);
  }
}

export async function postCatVal(categoryId, value) {
  const Category = Parse.Object.extend("Category");
  const thisCategory = new Category();
  thisCategory.set("objectId", categoryId);
  //Semantic bug: Works as intented but causes console error - It's because the name is required in the DB
  thisCategory.set("value", value);
  try {
    await thisCategory.save();
    console.log("Saved category value to DB");
  } catch (error) {
    console.log(
      "Error in postCatVal(): This is a tempoary solution: Cannot post a category without a name. You cannot make the name field not mandatory, because then it posts a new category without name everytime the page rerenders " +
        error
    );
  }
}

export async function getAssets(categoryId, userId, setAssets) {
  const parseQuery = new Parse.Query("Asset");
  parseQuery.contains("categoryId", categoryId);
  parseQuery.contains("userId", userId);
  try {
    let assets = await parseQuery.find();
    // Note: Removed this logic to its own method
    // Saves total category value in catVal which it gets from the array of asset related to a cetain category
    // const catVal = getCatVal(assets);
    // postCatVal(categoryId, catVal); //Technical debt: Needs to be called correctly other place or in useEffect because we don't want it to be called when we are getting assets
    setAssets(assets);
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
    alert("Success! Asset " + assetId + " deleted");
    return true;
  } catch (error) {
    alert("Error " + error + " caught");
    return false;
  }
}

//Supposed to be the update function - right now it's just a slightly different delete function
export async function putAsset(assetId) {
  const Asset = new Parse.Object("Asset");
  Asset.set("objectId", assetId);
  try {
    await Asset.destroy();
    alert(
      "Please press add a new asset and insert the updated name and value of your asset"
    );
    return true;
  } catch (error) {
    alert("Error " + error + " caught");
    return false;
  }
}

//Delete category - Need to delete from both category table and asset table
export async function deleteCategory(categoryId) {
  // const Asset = new Parse.Object("Asset"); //Note: Doesn't work but it only affects the database by not removing assets connected to a category after the category have been deleted. It doesn't affect the user experience. Need to figure out a way to loop though all assets with a given categoryId and destroy them
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

//Doesnt work for now: Suprinsingly complex problem -
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
