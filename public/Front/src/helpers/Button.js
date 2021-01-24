"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = exports.Card = void 0;
var getThemeColors_1 = require("../utils/getThemeColors");
var styled_components_1 = __importDefault(require("styled-components"));
var Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n   background-color: ", ";\n   border: ", ";\n   color: ", ";\n    &:hover {\n       background-color: ", ";\n       border: ", ";\n       color: #1d1d1d;\n    }\n"], ["\n   background-color: ", ";\n   border: ", ";\n   color: ", ";\n    &:hover {\n       background-color: ", ";\n       border: ", ";\n       color: #1d1d1d;\n    }\n"])), getThemeColors_1.getChildrenBackground, getThemeColors_1.getBorderColor, getThemeColors_1.getTextColor, getThemeColors_1.getHoverColor, getThemeColors_1.getHoverColor);
exports.Card = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n             background-color: ", ";\n            margin: 1rem;\n            flex-basis: 45%;\n            padding: 1rem;\n            text-align: left;\n            color: ", ";\n            text-decoration: none;\n            border: 1px solid black;\n            border-radius: 10px;\n            transition: color 0.15s ease, border-color 0.15s ease;\n            &:hover {\n            background-color: ", ";\n            color: #1d1d1d;;\n          }\n             \n"], ["\n             background-color: ", ";\n            margin: 1rem;\n            flex-basis: 45%;\n            padding: 1rem;\n            text-align: left;\n            color: ", ";\n            text-decoration: none;\n            border: 1px solid black;\n            border-radius: 10px;\n            transition: color 0.15s ease, border-color 0.15s ease;\n            &:hover {\n            background-color: ", ";\n            color: #1d1d1d;;\n          }\n             \n"
    //width: 50%
])), getThemeColors_1.getChildrenBackground, getThemeColors_1.getTextColor, getThemeColors_1.getHoverColor);
//width: 50%
exports.Form = styled_components_1.default.form(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            background-color: ", ";\n            padding: 30px;\n            color: ", ";\n            text-decoration: none;\n            border: 1px solid black;\n            border-radius: 10px;\n            transition: color 0.15s ease, border-color 0.15s ease;\n            p: {\n               color: white;\n            }\n                 \n"], ["\n            background-color: ", ";\n            padding: 30px;\n            color: ", ";\n            text-decoration: none;\n            border: 1px solid black;\n            border-radius: 10px;\n            transition: color 0.15s ease, border-color 0.15s ease;\n            p: {\n               color: white;\n            }\n                 \n"])), getThemeColors_1.getChildrenBackground, getThemeColors_1.getTextColor);
exports.default = Button;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Button.js.map