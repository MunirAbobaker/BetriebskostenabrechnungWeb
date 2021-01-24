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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Input_1 = __importDefault(require("./Input"));
var Section = React.memo(function (props) {
    var onChangeHandler = function (e, index) {
        props.onChangeInputHandler(index, e);
    };
    var body;
    body = props.sectionMetaData.map(function (question, index) {
        return (React.createElement(React.Fragment, null,
            React.createElement(Input_1.default, { id: index, text: question.text, placheholder: question.placeholder, value: props.sectionBody.length > index ? props.sectionBody[index].value : "", onChange: function (e) { return onChangeHandler(e, index); } }),
            React.createElement("br", null)));
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { marginBottom: "40px" } },
            React.createElement("h1", null, props.section)),
        body));
});
exports.default = Section;
//# sourceMappingURL=Section.js.map