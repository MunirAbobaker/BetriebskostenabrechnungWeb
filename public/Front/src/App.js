"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var createUrqlClient_1 = require("./utils/createUrqlClient");
var urql_1 = require("urql");
var OperationExpenseView_1 = __importDefault(require("./containers/OperationExpenseView"));
var useTheme_1 = __importDefault(require("./useTheme"));
require("./style.less");
var react_router_dom_1 = require("react-router-dom");
var getThemeColors_1 = require("./utils/getThemeColors");
// shift + alt + f => pretty printer
// change style of App based on this fct
// props => props.theme.mode === 'dark' ? '#EEE' : '#111'
/* .login {
  background-color:${getFromColor};
} */
var GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    body {\n      background-color: ", ";\n      color: ", ";\n      .text {\n        color: '#EEE';\n      }\n      .InputElement:placeholder { \n        color: #e1e1e1;\n        opacity: 1; \n      }\n    }\n       \n    "], ["\n    body {\n      background-color: ", ";\n      color: ", ";\n      .text {\n        color: '#EEE';\n      }\n      .InputElement:placeholder { \n        color: #e1e1e1;\n        opacity: 1; \n      }\n    }\n       \n    "])), getThemeColors_1.getBackground, getThemeColors_1.getForeground);
var App = function () {
    var theme = useTheme_1.default();
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme },
            react_1.default.createElement(GlobalStyle, null),
            react_1.default.createElement(urql_1.Provider, { value: createUrqlClient_1.client },
                react_1.default.createElement("div", { className: "container" },
                    react_1.default.createElement(OperationExpenseView_1.default, { title: "Betriebskostenabrechnngssystem" }))))));
};
exports.default = App;
var templateObject_1;
//# sourceMappingURL=App.js.map