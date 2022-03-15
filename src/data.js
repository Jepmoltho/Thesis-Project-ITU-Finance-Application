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
