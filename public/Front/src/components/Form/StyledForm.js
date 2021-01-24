"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var Button_1 = require("../../helpers/Button");
//TODO: rm component und directly implementet in Form, for register the same and change vairaint to 
// prevent clicken the componet, choose the other variant option and implement pointer=  notallowed
var StyledForm = function (props) {
    return (react_1.default.createElement(styled_components_1.ThemeConsumer, null, function (theme) { return (react_1.default.createElement(Button_1.Form, { variant: "normal", className: props.class }, props.children)); }));
};
exports.default = StyledForm;
//# sourceMappingURL=StyledForm.js.map