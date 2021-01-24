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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Table_1 = __importDefault(require("../components/Table/Table"));
var graphql_1 = require("../generated/graphql");
var Spinner_1 = __importDefault(require("../components/UI/Spinner"));
var currencyFormatDE_1 = require("../utils/currencyFormatDE");
var TableContainer = function () {
    var props = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        props[_i] = arguments[_i];
    }
    var _a = React.useState([]), dataState = _a[0], setData = _a[1];
    var _b = React.useState(-1), editIdex = _b[0], setEditedIdex = _b[1];
    var _c = graphql_1.useGetGesamteAbrechnungQuery()[0], data = _c.data, fetching = _c.fetching;
    var Heizkosten = null;
    var BewohnerBetriebskosten = null;
    var Abrechnung = null;
    var Einzelabrechnung = null;
    // data is loading
    if (fetching) {
        console.log("still fetching", fetching);
    }
    else if (!(data === null || data === void 0 ? void 0 : data.getAllegemeinebrechnung)) {
        console.log("there is no data");
        return null;
    }
    else {
        Abrechnung = data.getAllegemeinebrechnung.AbrechnungsdataArray;
        Heizkosten = data.getAllegemeinebrechnung.HeizkostenAbrechnungsdataArray;
        Einzelabrechnung = data.getAllegemeinebrechnung.EinzelabrechnungsdataArray;
        BewohnerBetriebskosten = data.getAllegemeinebrechnung.BewohnerBetribskostendata;
        console.log("you got some data", data.getAllegemeinebrechnung);
    }
    var handleRemove = function (i) {
        var copyData = __spreadArrays(dataState);
        copyData.filter(function (_k, j) { return j !== i; });
        setData(copyData);
    };
    var startEditing = function (i) {
        console.log(i);
        setEditedIdex(i);
    };
    var stopEditing = function () {
        setEditedIdex(-1);
    };
    var handleChange = function (e, name, i) {
        var value = e.currentTarget.value;
        var copyData = __spreadArrays(dataState);
        copyData.map(function (row, j) {
            var _a;
            return j === i ? __assign(__assign({}, row), (_a = {}, _a[name] = value, _a)) : row;
        });
        setData(copyData);
    };
    var renderAbrechnung = function () {
        Abrechnung.forEach(function (el) {
            el.monatliche_Abschlag = currencyFormatDE_1.currencyFormatDE(el.monatliche_Abschlag);
        });
        return (React.createElement("div", { style: { padding: '15px', margin: '10px' } },
            React.createElement("h2", null, "Abrechnung f\u00FCr das Jahr 2019"),
            React.createElement(Table_1.default, { style: { width: '100%', marginBottom: '10px' }, handleRemove: handleRemove, startEditing: startEditing, editIdex: editIdex, stopEditing: stopEditing, handleChange: handleChange, data: Abrechnung, header: [
                    {
                        name: "monatliche_Abschlag",
                        prop: "monatliche_Abschlag",
                    },
                    {
                        name: "Wohnfläche",
                        prop: "Wohnflaeche",
                    },
                    {
                        name: "Start Data",
                        prop: "Start_Data",
                    },
                    {
                        name: "End Data",
                        prop: "End_Data",
                    }
                ] })));
    };
    var renderHeizKosten = function () {
        Heizkosten.forEach(function (el) {
            el.Kosten_pro_Einheit = currencyFormatDE_1.currencyFormatDE(el.Kosten_pro_Einheit);
            el.Betrag_in_Euro = currencyFormatDE_1.currencyFormatDE(el.Betrag_in_Euro);
            el.Gesamt_in_Euro = currencyFormatDE_1.currencyFormatDE(el.Gesamt_in_Euro);
        });
        return (React.createElement("div", { style: { padding: '15px', margin: '10px' } },
            React.createElement("h2", null, "Heizkosten f\u00FCr das Jahr 2019"),
            React.createElement(Table_1.default, { style: { width: '100%', marginBottom: '10px' }, handleRemove: handleRemove, startEditing: startEditing, editIdex: editIdex, stopEditing: stopEditing, handleChange: handleChange, data: Heizkosten, header: [
                    {
                        name: "Kostenkonzept",
                        prop: "Kostenkonzept",
                    },
                    {
                        name: "Verteilschluessel_Einheit",
                        prop: "Verteilschluessel_Einheit",
                    },
                    {
                        name: "Verteilschluessel",
                        prop: "Verteilschluessel",
                    },
                    {
                        name: "Kosten_pro_Einheit",
                        prop: "Kosten_pro_Einheit",
                    },
                    {
                        name: "Betrag_in_Euro",
                        prop: "Betrag_in_Euro",
                    },
                    {
                        name: "Gesamt_in_Euro",
                        prop: "Gesamt_in_Euro",
                    },
                ] })));
    };
    var renderEinzelabrechnung = function () {
        Heizkosten.forEach(function (el) {
            el.Kosten_pro_Einheit = currencyFormatDE_1.currencyFormatDE(el.Kosten_pro_Einheit);
            el.Betrag_in_Euro = currencyFormatDE_1.currencyFormatDE(el.Betrag_in_Euro);
            el.Gesamt_in_Euro = currencyFormatDE_1.currencyFormatDE(el.Gesamt_in_Euro);
        });
        return (React.createElement("div", { style: { padding: '15px', margin: '10px' } },
            React.createElement("h2", null, "Einzelabrechnung f\u00FCr das Jahr 2019"),
            React.createElement(Table_1.default, { style: { width: '100%', marginBottom: '10px' }, handleRemove: handleRemove, startEditing: startEditing, editIdex: editIdex, stopEditing: stopEditing, handleChange: handleChange, data: Einzelabrechnung, header: [
                    {
                        name: "Abrechnungsposition",
                        prop: "Abrechnungsposition",
                    },
                    {
                        name: "verteilt nach",
                        prop: "verteilt_nach",
                    },
                    {
                        name: "Gesamte_Einheiten",
                        prop: "Gesamte_Einheiten",
                    },
                    {
                        name: "Gesamte_Kosten",
                        prop: "Gesamte_Kosten",
                    },
                    {
                        name: "Einheit_Anteil",
                        prop: "Einheit_Anteil",
                    }, {
                        name: "Einheit",
                        prop: "Einheit",
                    },
                    {
                        name: "Kosten_Anteil",
                        prop: "Kosten_Anteil",
                    },
                ] })));
    };
    var renderBewohnerBetriebskosten = function () {
        var data = [];
        data.push(BewohnerBetriebskosten);
        console.log(data);
        return (React.createElement("div", { style: { padding: '15px', margin: '10px' } },
            React.createElement("h2", null, "Bewhonerbetriebskosten f\u00FCr das Jahr 2019"),
            React.createElement(Table_1.default, { style: { width: '100%' }, handleRemove: handleRemove, startEditing: startEditing, editIdex: editIdex, stopEditing: stopEditing, handleChange: handleChange, data: data, header: [
                    {
                        name: "Position",
                        prop: "Position",
                    },
                    {
                        name: "Betrag",
                        prop: "Betrag",
                    }
                ] })));
    };
    return (React.createElement("div", { style: { width: '100%' } },
        Abrechnung != null ? renderAbrechnung() : React.createElement(Spinner_1.default, null),
        Heizkosten != null ? renderHeizKosten() : null,
        BewohnerBetriebskosten != null ? renderBewohnerBetriebskosten() : null,
        Einzelabrechnung != null ? renderEinzelabrechnung() : null,
        React.createElement("div", null)));
};
exports.default = TableContainer;
//# sourceMappingURL=TableContainer.js.map