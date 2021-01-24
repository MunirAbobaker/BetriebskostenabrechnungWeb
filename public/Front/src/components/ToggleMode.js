"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var Button_1 = __importDefault(require("../helpers/Button"));
function ToggleMode(props) {
    return (react_1.default.createElement(styled_components_1.ThemeConsumer, null, function (theme) { return (react_1.default.createElement(Button_1.default, { variant: "primary", className: props.class, onClick: function (e) {
            return theme.setTheme(theme.mode === "dark"
                ? __assign(__assign({}, theme), { mode: "light" }) : __assign(__assign({}, theme), { mode: "dark" }));
        } }, props.children)); }));
}
exports.default = ToggleMode;
//# sourceMappingURL=ToggleMode.js.map