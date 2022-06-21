"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassRegExp = void 0;
class ClassRegExp {
    constructor() {
        this.CLASS_REGEXP = /^[ACP][0-9]{4}[G-M]$/;
    }
    validate(regex) {
        return this.CLASS_REGEXP.test(regex);
    }
}
exports.ClassRegExp = ClassRegExp;
