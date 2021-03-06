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
var local_storage_fallback_1 = __importDefault(require("local-storage-fallback"));
function useTheme(defaultTheme) {
    if (defaultTheme === void 0) { defaultTheme = { mode: 'light' }; }
    var _a = React.useState(getInitialTheme), theme = _a[0], _setTheme = _a[1];
    // remember the mode use useEffect and storage
    function getInitialTheme() {
        // not in useState, cuz we access stoae and that is very expensive, so we accesss when needed
        var savedTheme = local_storage_fallback_1.default.getItem('theme');
        // check if there theme return and parse, otherwis retrun light as default
        //return savedTheme ? JSON.parse(savedTheme): {mode: 'light'} or
        return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
    }
    React.useEffect(function () {
        // save theme in localstorage
        local_storage_fallback_1.default.setItem('theme', JSON.stringify(theme));
    }, 
    // useEffect is only called when them changed
    [theme]);
    return __assign(__assign({}, theme), { setTheme: function (_a) {
            var setTheme = _a.setTheme, theme = __rest(_a, ["setTheme"]);
            return _setTheme(theme);
        } });
}
exports.default = useTheme;
//# sourceMappingURL=useTheme.js.map