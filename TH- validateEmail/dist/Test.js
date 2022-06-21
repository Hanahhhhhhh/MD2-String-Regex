"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {EmailRegex} from "./EmailRegex";
//
// let emailRegex = new EmailRegex();
// let validEmail: string[] = ['a@gmail.com", "ab@yahoo.com", "abc@hotmail.com'];
// let invalidEmail: string[] = ["@gmail.com", "ab@gmail.", "@#abc@gmail.com"];
// for (let email of validEmail) {
//     let isvalid: boolean = emailRegex.validate(email);
//     if (isvalid) {
//         console.log("Email is" + email + 'is valid' + isvalid);
//     } else {
//         console.log("Email is " + email + " is not valid")
//     }
//
// }
// for (let email of invalidEmail) {
//     let isvalid: boolean = emailRegex.validate(email);
//     if (isvalid) {
//         console.log("Email is" + email + 'is valid' + isvalid);
//     } else {
//         console.log("Email is " + email + " is not valid")
//     }
//
//
// }
//
const EmailRegex_1 = require("./EmailRegex");
let emailRegex = new EmailRegex_1.EmailRegex();
let validEmail = ["a@gmail.com", "ab@yahoo.com", "abc@hotmail.com"];
let invalidEmail = ["@gmail.com", "ab@gmail.", "@#abc@gmail.com"];
for (let email of validEmail) {
    let isvalid = emailRegex.validate(email);
    console.log("Email is " + email + " is valid: " + isvalid);
}
for (let email of invalidEmail) {
    let isvalid = emailRegex.validate(email);
    console.log("Email is " + email + " is valid: " + isvalid);
}
