"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var Button_1 = __importDefault(require("../../helpers/Button"));
var CustomizedButton = function (props) {
    return (react_1.default.createElement(styled_components_1.ThemeConsumer, null, function (theme) { return (react_1.default.createElement(Button_1.default, { variant: "primary", className: props.class, type: props.type, onClick: props.onClick }, props.children)); }));
};
exports.default = CustomizedButton;
//# sourceMappingURL=CustomizedButton.js.map