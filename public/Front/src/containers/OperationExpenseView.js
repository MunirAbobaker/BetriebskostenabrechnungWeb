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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("material-ui/styles/");
/* import Form from '../components/Form/Form'; */
var Cards_1 = __importDefault(require("./Cards/Cards"));
var TableContainer_1 = __importDefault(require("./TableContainer"));
var Register_1 = __importDefault(require("../components/Register"));
var Login_1 = __importDefault(require("../components/Login"));
var Headers_1 = __importDefault(require("../components/Headers"));
var ToggleMode_1 = __importDefault(require("../components/ToggleMode"));
var ChangePassword_1 = __importDefault(require("../components/change-password/ChangePassword"));
var ForgetPassword_1 = __importDefault(require("../components/change-password/ForgetPassword"));
var constants_1 = require("../utils/constants");
var Form_1 = __importDefault(require("../components/Form/Form"));
var graphql_1 = require("../generated/graphql");
var OperationExpenseView = function (_a) {
    var props = __rest(_a, []);
    var cardsData = constants_1.CARDS_DATA;
    var formData = constants_1.FORM_DATA;
    var _b = React.useState(''), username = _b[0], setUsername = _b[1];
    var _c = graphql_1.useMeQuery()[0], data = _c.data, fetching = _c.fetching;
    var getUser = function () {
        // must been under provider client to work  useQuery
        // data is loading
        if (fetching) {
            // user not logged in
        }
        else if (!(data === null || data === void 0 ? void 0 : data.me)) {
            return null;
            // user logged in
        }
        else {
            // props.onLoggedInHandler(data.me.username);
            return data.me.username;
        }
    };
    return ( //style={{display: 'flex', flexDirection: 'column'}} className={"grid"} style={{ flex: '0 1 100%'}}
    React.createElement(styles_1.MuiThemeProvider, null,
        React.createElement("div", null,
            React.createElement(Headers_1.default, { userLoggedin: getUser() },
                React.createElement(ToggleMode_1.default, { class: "Button" }, "Toggle Mode ")),
            React.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                React.createElement("h1", { className: "title" }, "BKAS"),
                React.createElement("h1", { className: "title", style: { fontSize: '2rem' } }, props.title)),
            React.createElement("div", { className: "grid" },
                React.createElement(react_router_dom_1.Switch, null,
                    React.createElement(react_router_dom_1.Route, { path: "/", exact: true, render: function () { return React.createElement(Cards_1.default, { cardsData: cardsData.cards, userLoggedIn: getUser() }); } }),
                    React.createElement(react_router_dom_1.Route, { path: "/register", exact: true, component: Register_1.default }),
                    React.createElement(react_router_dom_1.Route, { path: "/login", exact: true, component: Login_1.default }),
                    React.createElement(react_router_dom_1.Route, { path: "/change-password", component: ChangePassword_1.default }),
                    React.createElement(react_router_dom_1.Route, { path: "/forgot-password", component: ForgetPassword_1.default }),
                    React.createElement(react_router_dom_1.Route, { path: "/create", exact: true, component: Form_1.default }),
                    React.createElement(react_router_dom_1.Route, { path: "/templates", exact: true, component: TableContainer_1.default }),
                    React.createElement(react_router_dom_1.Route, { path: "/display", exact: true, component: TableContainer_1.default }))))));
};
exports.default = OperationExpenseView;
//# sourceMappingURL=OperationExpenseView.js.map