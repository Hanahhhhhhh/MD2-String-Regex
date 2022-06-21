import {PhoneRegex} from "./PhoneRegex";

let phoneRegex = new PhoneRegex();
let validPhone : string[] = ["84-0978489648"];
let invalidPhone : string[] = ["a8-22222222"];
for (let email of validPhone) {
    let isvalid: boolean = phoneRegex.validate(email);
    console.log("Phone is " + email + " is valid: " + isvalid);
}

for (let phone of invalidPhone) {
    let isvalid: boolean = phoneRegex.validate(phone);
    console.log("Phone is " + phone + " is valid: " + isvalid);
}


