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

export async function getAssets(categoryId, userId, setAssets) {
  const parseQuery = new Parse.Query("Asset");
  parseQuery.contains("categoryId", categoryId);
  parseQuery.contains("userId", userId);
  try {
    let assets = await parseQuery.find();
    setAssets(assets);
    return assets;
  } catch (error) {
    alert("errors");
    return false;
  }
}

/*
export async function getDuties(context, setDuties) {
  // Reading parse objects is done by using Parse.Query
  const parseQuery = new Parse.Query("Duty");
  parseQuery.contains("excursionId", context);
  try {
    let duties = await parseQuery.find();
    // Be aware that empty or invalid queries return as an empty array
    // Set results to state variable
    setDuties(duties);
    return duties;
  } catch (error) {
    // Error can be caused by lack of Internet connection
    alert(error);
    return false;
  }
}
*/
