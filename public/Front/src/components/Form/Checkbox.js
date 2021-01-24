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
var Checkbox = React.memo(function (props) {
    var _a = React.useState(false), checked = _a[0], setChecked = _a[1];
    var checkboxHandler = function () {
        var value = !checked;
        setChecked(value);
        props.checkboxHandler(props.id, value);
    };
    return (React.createElement("li", { className: "list-item sectionItem" },
        React.createElement("div", { className: "sectionItem" },
            React.createElement("input", { id: props.name, type: "checkbox", name: props.name, checked: checked, onChange: checkboxHandler }),
            React.createElement("label", { htmlFor: props.name },
                " ",
                React.createElement("span", null,
                    props.name,
                    " ")))));
});
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map