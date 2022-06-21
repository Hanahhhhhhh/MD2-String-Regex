"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneRegex = void 0;
class PhoneRegex {
    constructor() {
        this.PHONE_REGEX = /^[0-9]{2}[-][0][0-9]{9}$/;
    }
    validate(regex) {
        return this.PHONE_REGEX.test(regex);
    }
}
exports.PhoneRegex = PhoneRegex;
