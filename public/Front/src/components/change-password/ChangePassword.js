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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
Object.defineProperty(exports, "__esModule", { value: true });
var material_ui_1 = require("material-ui");
var react_1 = __importStar(require("react"));
var toErrorMap_1 = require("../../utils/toErrorMap");
var react_router_dom_1 = require("react-router-dom");
var graphql_1 = require("../../generated/graphql");
var ChangePassword = function (_a) {
    var props = __rest(_a, []);
    var _b = graphql_1.useChangePasswordMutation(), changePassword = _b[1];
    var _c = react_1.useState(''), newPassword = _c[0], setNewPassword = _c[1];
    var _d = react_1.useState(''), error = _d[0], setError = _d[1];
    var getLastItem = function (thePath) { return thePath.substring(thePath.lastIndexOf('/') + 1); };
    var onSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var token, response, errorMap;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    e.preventDefault();
                    token = getLastItem(window.location.pathname);
                    return [4 /*yield*/, changePassword({ newPassword: newPassword, token: token })];
                case 1:
                    response = _c.sent();
                    if ((_a = response.data) === null || _a === void 0 ? void 0 : _a.changePassword.errors) {
                        errorMap = toErrorMap_1.toErrorMap(response.data.changePassword.errors);
                        if ('token' in errorMap) {
                            setError(errorMap.token);
                        }
                        if ('newPassword' in errorMap) {
                            setError(errorMap.newPassword);
                        }
                    }
                    else if ((_b = response.data) === null || _b === void 0 ? void 0 : _b.changePassword.user.id) {
                        //worked
                        console.log("worked", response);
                        props.history.push('/');
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var change = function (e) {
        setNewPassword(e.target.value);
    };
    return (react_1.default.createElement("div", null,
        "token is: ",
        getLastItem(window.location.pathname),
        react_1.default.createElement("form", null,
            react_1.default.createElement(material_ui_1.TextField, { name: "newPassword", hintText: "newPassword", floatingLabelText: "New Password", type: 'password', value: newPassword, onChange: function (e) { return change(e); }, errorText: error, floatingLabelFixed: true }),
            error ? react_1.default.createElement(react_router_dom_1.Link, { to: "/forgot-password" }, "go and get a new token ") : null,
            react_1.default.createElement("br", null),
            react_1.default.createElement("button", { type: "submit", onClick: onSubmit }, "Change password"))));
};
exports.default = ChangePassword;
//# sourceMappingURL=ChangePassword.js.map