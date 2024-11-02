"use strict";
// ! defining a funtion with optional parameters: Function printIngredient
// ! we can check for the existence of this optional param.
function printIngredient(quantity, ingredient, extra) {
    console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ""}`);
}
printIngredient("1C", "Flour");
printIngredient("1C", "Flour", "sth more");
// ! this will cause an error, because you cannot assign a string to something that could possibly be undefined you can put an "!" like so: return user.info.email!; Means i know better it will not be null
// ! But there is a better way to do it because that isnt the best practice, so we define getEmailEasy: return user?.info?.email ?? ""
// ! It is the same functionality but at a fraction of the size and complexity.
function getEmail(user) {
    if (user.info) {
        return user.info.email;
    }
    return "";
}
// ! defining a function with an optional field
// ! We use the optional chaining feature: if user exists then give me info, if info exists then give me email and if that is null then return and empty string instead ""
function getEmailEasy(user) {
    var _a, _b;
    return (_b = (_a = user === null || user === void 0 ? void 0 : user.info) === null || _a === void 0 ? void 0 : _a.email) !== null && _b !== void 0 ? _b : "";
}
// ! Optional Callbacks: we define a function with a function as parameter, but we only call that if it exists and we do that like this: 
function addWithCallback(x, y, callback) {
    console.log([x, y]);
    callback === null || callback === void 0 ? void 0 : callback();
}
