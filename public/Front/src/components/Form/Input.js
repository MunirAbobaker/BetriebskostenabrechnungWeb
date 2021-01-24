"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_components_1 = require("styled-components");
var Input = React.memo(function (props) {
    var themeContext = React.useContext(styled_components_1.ThemeContext);
    return (React.createElement("div", { className: "InputContainer" },
        React.createElement("p", null, props.text),
        React.createElement("input", { id: props.id, className: props.error ? "InputElement InputError" : "InputElement", type: "text", value: props.value, onChange: props.onChange, placeholder: props.placheholder, autoComplete: "on" }),
        React.createElement("span", { className: "SpanElement" }, props.error)));
});
exports.default = Input;
//# sourceMappingURL=Input.js.map