"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toErrorMap = void 0;
// convert arra to objects
var toErrorMap = function (errors) {
    var errorMap = {};
    errors.forEach(function (_a) {
        var field = _a.field, message = _a.message;
        errorMap[field] = message;
    });
    return errorMap;
};
exports.toErrorMap = toErrorMap;
//# sourceMappingURL=toErrorMap.js.map