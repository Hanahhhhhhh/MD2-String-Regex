"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AccountRegex_1 = require("./AccountRegex");
let accountRegex = new AccountRegex_1.AccountRegex();
let validAccount = ["123abc_", "_abc123", "______", "123456", "abcdefgh"];
let invalidAccount = [".@", "12345", "1234_", "abcde"];
for (let account of validAccount) {
    let isvalid = accountRegex.validate(account);
    console.log("Account is " + account + " is valid: " + isvalid);
}
for (let account of invalidAccount) {
    let isvalid = accountRegex.validate(account);
    console.log("Account is " + account + " is valid: " + isvalid);
}
