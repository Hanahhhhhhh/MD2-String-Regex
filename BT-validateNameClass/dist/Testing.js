"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClassRegExp_1 = require("./ClassRegExp");
let validClass = ["C0318G", "A2384M"];
let invalidClass = ["M0318G", "P0323A"];
for (let className of validClass) {
    let classRegex = new ClassRegExp_1.ClassRegExp();
    let isvalid = classRegex.validate(className);
    if (isvalid) {
        console.log("Class is " + className + " is valid");
    }
    else {
        console.log("Class is " + className + " is not valid");
    }
}
for (let className of invalidClass) {
    let classRegex = new ClassRegExp_1.ClassRegExp();
    let isvalid = classRegex.validate(className);
    if (isvalid) {
        console.log("Class is " + className + " is valid");
    }
    else {
        console.log("Class is " + className + " is not valid");
    }
}
