"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhoneRegex_1 = require("./PhoneRegex");
let phoneRegex = new PhoneRegex_1.PhoneRegex();
let validPhone = ["84-0978489648"];
let invalidPhone = ["a8-22222222"];
for (let email of validPhone) {
    let isvalid = phoneRegex.validate(email);
    console.log("Phone is " + email + " is valid: " + isvalid);
}
for (let phone of invalidPhone) {
    let isvalid = phoneRegex.validate(phone);
    console.log("Phone is " + phone + " is valid: " + isvalid);
}
