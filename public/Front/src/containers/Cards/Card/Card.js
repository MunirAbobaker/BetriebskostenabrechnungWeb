"use strict";
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
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var path = require("path");
var graphql_1 = require("../../../generated/graphql");
var Card = function (_a) {
    var props = __rest(_a, []);
    var _b = graphql_1.useLogoutMutation(), logoutFetching = _b[0].fetching, logout = _b[1];
    var onlogoutHandler = function () {
        logout();
    };
    return (react_1.default.createElement("div", { key: props.cardInfos.id, className: "cardTest" }, props.cardInfos.id === "logout" ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("img", { className: "images", alt: props.cardInfos.title, src: window.location.origin + "/assets/" + props.cardInfos.id + ".png" }),
        props.userLoggedIn && props.cardInfos.id === "register" ? (react_1.default.createElement("h3", { className: "text" }, props.cardInfos.title)) : (react_1.default.createElement("a", { role: "button", onClick: function () { return onlogoutHandler(); } },
            react_1.default.createElement("h3", { className: "text" }, props.cardInfos.title))))) : (react_1.default.createElement(react_router_dom_1.Link, { to: "/" + props.cardInfos.id, className: props.userLoggedIn && props.cardInfos.id === "register"
            ? "NotClickable"
            : "" },
        react_1.default.createElement("img", { className: "images", alt: props.cardInfos.title, src: window.location.origin + "/assets/" + props.cardInfos.id + ".png" }),
        react_1.default.createElement("h3", { className: "text" }, props.cardInfos.title)))));
};
exports.default = Card;
//# sourceMappingURL=Card.js.map