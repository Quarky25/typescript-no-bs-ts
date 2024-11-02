"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
exports.getName = getName;
//* Defining functions, and how to import and export them.
function addNumbers(a, b) {
    return a + b;
}
exports.default = addNumbers;
const addStrings = (str1, str2, str3 = "") => `${str1} ${str2} ${str3}`;
exports.addStrings = addStrings;
// * function with union type: any of the types are ok
const format = (title, param) => `${title} ${param}`;
exports.format = format;
// * Void function: defining a function with the same parameters and returns anything.
const printFormat = (title, param) => {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
// * Function that returns Promise:
const fetchData = (url) => Promise.resolve(`Data from ${url}`);
exports.fetchData = fetchData;
// * Rest parameters: taking multiple arguments and coalesce them into an array:
function introduce(salutation, ...names) {
    return `${salutation} ${names.join(" ")}`;
}
//! Typescript enforces types at compile time not run time.
function getName(user) {
    var _a, _b;
    return `${(_a = user === null || user === void 0 ? void 0 : user.fname) !== null && _a !== void 0 ? _a : 'fname'} ${(_b = user === null || user === void 0 ? void 0 : user.lname) !== null && _b !== void 0 ? _b : 'lname'}`;
}
