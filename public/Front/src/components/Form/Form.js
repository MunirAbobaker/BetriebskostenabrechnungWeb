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
var react_router_dom_1 = require("react-router-dom");
var react_datepicker_1 = __importDefault(require("react-datepicker"));
var graphql_1 = require("../../generated/graphql");
var CustomizedButton_1 = __importDefault(require("../UI/CustomizedButton"));
var StyledForm_1 = __importDefault(require("./StyledForm"));
var Input_1 = __importDefault(require("./Input"));
var Section_1 = __importDefault(require("./Section"));
var Checkbox_1 = __importDefault(require("./Checkbox"));
var constants_1 = require("../../utils/constants");
var convertToFloat_1 = require("../../utils/convertToFloat");
var Display = function () { return (React.createElement(react_router_dom_1.Route, { path: "/", render: function (props) { return React.createElement("h1", null, "hallo Display"); } })); };
var Form = React.memo(function (props) {
    var _a = React.useState(new Date()), startDate = _a[0], setStartDate = _a[1];
    var _b = React.useState(new Date()), endDate = _b[0], setEndDate = _b[1];
    var _c = graphql_1.useCreateInvoiceMutation(), createAbrechnung = _c[1];
    var _d = graphql_1.useCreateHeizkostenabrechnungMutation(), createHeizkosten = _d[1];
    var _e = graphql_1.useCreateEinzelabrechnungMutation(), createEinzelabrechnung = _e[1];
    var _f = graphql_1.useCreateBewohnerBetriebskostenMutation(), createBewohnerBetriebskosten = _f[1];
    var _g = React.useState("Allgemeine Fragen"), section = _g[0], setSection = _g[1];
    var _h = React.useState([]), firstSection = _h[0], setFirstSection = _h[1];
    var _j = React.useState([]), secondSection = _j[0], setSecondSection = _j[1];
    var _k = React.useState([]), thirdSection = _k[0], setThirdSection = _k[1];
    var _l = React.useState([]), forthSection = _l[0], setforthSection = _l[1];
    var _m = React.useState([]), fifthSection = _m[0], setfifthSection = _m[1];
    var _o = React.useState([]), sixthSection = _o[0], setSixthSection = _o[1];
    var _p = React.useState([]), seventhSection = _p[0], setSeventhSection = _p[1];
    var _q = React.useState(false), checked = _q[0], setChecked = _q[1];
    var onSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response, _a, sDate, startDay, startMonth, startYear, startingDate, eDate, endDay, endMonth, endYear, endingDate, monatliche_Abschlag, Wohnflaeche, WarmwasserResponse, AbwasserResponse;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        return __generator(this, function (_s) {
            switch (_s.label) {
                case 0:
                    e.preventDefault();
                    _a = section;
                    switch (_a) {
                        case "Allgemeine Fragen": return [3 /*break*/, 1];
                        case "Heizkosten": return [3 /*break*/, 3];
                        case "Wasser": return [3 /*break*/, 5];
                        case "Warmwasser/Abwasser": return [3 /*break*/, 7];
                        case "Einzelabrechnung Teil1": return [3 /*break*/, 9];
                        case "Einzelabrechnung Teil2": return [3 /*break*/, 10];
                        case "Bewohner/Eigentümer": return [3 /*break*/, 12];
                        case "Bewohner": return [3 /*break*/, 13];
                        case "gesamte Abrechnung": return [3 /*break*/, 15];
                    }
                    return [3 /*break*/, 16];
                case 1:
                    sDate = new Date(startDate);
                    startDay = sDate.getDay();
                    startMonth = sDate.getMonth() + 1;
                    startYear = sDate.getFullYear();
                    startingDate = startYear + "-" + startMonth + "-" + startDay;
                    console.log("s", startingDate);
                    eDate = new Date(endDate);
                    endDay = eDate.getDay() + 1;
                    endMonth = eDate.getMonth() + 1;
                    endYear = eDate.getFullYear();
                    endingDate = endYear + "-" + endMonth + "-" + endDay;
                    console.log("e", endingDate);
                    monatliche_Abschlag = convertToFloat_1.convertToFloat(firstSection[0].value);
                    Wohnflaeche = convertToFloat_1.convertToFloat(firstSection[1].value);
                    return [4 /*yield*/, createAbrechnung({
                            monatliche_Abschlag: monatliche_Abschlag,
                            Wohnflaeche: Wohnflaeche,
                            Start_Data: startingDate,
                            End_Data: endingDate,
                        })];
                case 2:
                    response = _s.sent();
                    if ((_b = response.data) === null || _b === void 0 ? void 0 : _b.createAbrechnung.Abrechnungsdata) {
                        console.log(response.data.createAbrechnung.Abrechnungsdata);
                        setSection("Heizkosten");
                    }
                    else {
                        console.log("errors");
                        console.log((_c = response.data) === null || _c === void 0 ? void 0 : _c.createAbrechnung.errors);
                    }
                    return [3 /*break*/, 16];
                case 3: return [4 /*yield*/, createHeizkosten({
                        options: [
                            {
                                Kostenkonzept: "Heiz-Grundkosten",
                                Verteilschluessel: convertToFloat_1.convertToFloat(firstSection[1].value),
                                Kosten_pro_Einheit: convertToFloat_1.convertToFloat(secondSection[0].value),
                            },
                            {
                                Kostenkonzept: "Heiz-Verbrauchskosten",
                                Verteilschluessel: convertToFloat_1.convertToFloat(secondSection[1].value),
                                Kosten_pro_Einheit: convertToFloat_1.convertToFloat(secondSection[2].value),
                            },
                        ],
                    })];
                case 4:
                    response = _s.sent();
                    if ((_d = response.data) === null || _d === void 0 ? void 0 : _d.createHeizkosten.Abrechnungsdata) {
                        setSection("Wasser");
                    }
                    else {
                        console.log("errors");
                        console.log((_e = response.data) === null || _e === void 0 ? void 0 : _e.createHeizkosten.errors);
                    }
                    return [3 /*break*/, 16];
                case 5: return [4 /*yield*/, createHeizkosten({
                        options: [
                            {
                                Kostenkonzept: "Wasser-Grundkosten",
                                Verteilschluessel: convertToFloat_1.convertToFloat(firstSection[1].value),
                                Kosten_pro_Einheit: convertToFloat_1.convertToFloat(thirdSection[0].value),
                            },
                            {
                                Kostenkonzept: "Wasser-Verbrauchskosten",
                                Verteilschluessel: convertToFloat_1.convertToFloat(thirdSection[2].value),
                                Kosten_pro_Einheit: convertToFloat_1.convertToFloat(thirdSection[1].value),
                            },
                        ],
                    })];
                case 6:
                    WarmwasserResponse = _s.sent();
                    if ((_f = WarmwasserResponse.data) === null || _f === void 0 ? void 0 : _f.createHeizkosten.Abrechnungsdata) {
                        console.log((_g = WarmwasserResponse.data) === null || _g === void 0 ? void 0 : _g.createHeizkosten);
                        setSection("Warmwasser/Abwasser");
                    }
                    else {
                        console.log("errors");
                        console.log((_h = WarmwasserResponse.data) === null || _h === void 0 ? void 0 : _h.createHeizkosten.errors);
                    }
                    return [3 /*break*/, 16];
                case 7: return [4 /*yield*/, createHeizkosten({
                        options: [
                            {
                                Kostenkonzept: "Warmwasser-Grundkosten",
                                Verteilschluessel: convertToFloat_1.convertToFloat(forthSection[0].value),
                                Kosten_pro_Einheit: convertToFloat_1.convertToFloat(forthSection[1].value),
                            },
                            {
                                Kostenkonzept: "Warmwasser-Verbrauchskosten",
                                Verteilschluessel: convertToFloat_1.convertToFloat(forthSection[0].value),
                                Kosten_pro_Einheit: convertToFloat_1.convertToFloat(forthSection[2].value),
                            },
                        ],
                    })];
                case 8:
                    AbwasserResponse = _s.sent();
                    if ((_j = AbwasserResponse.data) === null || _j === void 0 ? void 0 : _j.createHeizkosten.Abrechnungsdata) {
                        console.log((_k = AbwasserResponse.data) === null || _k === void 0 ? void 0 : _k.createHeizkosten);
                        setSection("Einzelabrechnung Teil1");
                    }
                    else {
                        console.log("errors");
                        console.log((_l = AbwasserResponse.data) === null || _l === void 0 ? void 0 : _l.createHeizkosten.errors);
                    }
                    return [3 /*break*/, 16];
                case 9:
                    setSection("Einzelabrechnung Teil2");
                    return [3 /*break*/, 16];
                case 10: return [4 /*yield*/, createEinzelabrechnung({
                        options: [
                            {
                                Abrechnungsposition: "Heizkosten/Wasser",
                                verteilt_nach: "Ext. Heizung",
                                Gesamte_Einheiten: convertToFloat_1.convertToFloat(fifthSection[0].value),
                                Einheit_Anteil: 0,
                                Gesamte_Kosten: convertToFloat_1.convertToFloat(fifthSection[0].value),
                                Kosten_Anteil: 0,
                                Nichtumlagekosten: 0,
                                Umlagekosten: 0,
                            },
                            {
                                Abrechnungsposition: "Hausreinigung",
                                verteilt_nach: "Wohnfläche",
                                Gesamte_Einheiten: convertToFloat_1.convertToFloat(fifthSection[1].value),
                                Einheit_Anteil: convertToFloat_1.convertToFloat(firstSection[1].value),
                                Gesamte_Kosten: convertToFloat_1.convertToFloat(fifthSection[2].value),
                                Kosten_Anteil: 0,
                                Nichtumlagekosten: 0,
                                Umlagekosten: 0,
                            },
                            {
                                Abrechnungsposition: "Fahrstuhl",
                                verteilt_nach: "Wohnfläche",
                                Gesamte_Einheiten: convertToFloat_1.convertToFloat(fifthSection[1].value),
                                Einheit_Anteil: convertToFloat_1.convertToFloat(firstSection[1].value),
                                Gesamte_Kosten: convertToFloat_1.convertToFloat(fifthSection[3].value),
                                Kosten_Anteil: 0,
                                Nichtumlagekosten: 0,
                                Umlagekosten: 0,
                            },
                            {
                                Abrechnungsposition: "Strom",
                                verteilt_nach: "Wohnfläche",
                                Gesamte_Einheiten: convertToFloat_1.convertToFloat(fifthSection[1].value),
                                Einheit_Anteil: convertToFloat_1.convertToFloat(firstSection[1].value),
                                Gesamte_Kosten: convertToFloat_1.convertToFloat(fifthSection[4].value),
                                Kosten_Anteil: 0,
                                Nichtumlagekosten: 0,
                                Umlagekosten: 0,
                            },
                            {
                                Abrechnungsposition: "Müllabfuhr",
                                verteilt_nach: "Wohnfläche",
                                Gesamte_Einheiten: convertToFloat_1.convertToFloat(fifthSection[1].value),
                                Einheit_Anteil: convertToFloat_1.convertToFloat(firstSection[1].value),
                                Gesamte_Kosten: convertToFloat_1.convertToFloat(fifthSection[5].value),
                                Kosten_Anteil: 0,
                                Nichtumlagekosten: 0,
                                Umlagekosten: 0,
                            },
                            {
                                Abrechnungsposition: "Versicherungs-gebäude",
                                verteilt_nach: "Wohnfläche",
                                Gesamte_Einheiten: convertToFloat_1.convertToFloat(fifthSection[1].value),
                                Einheit_Anteil: convertToFloat_1.convertToFloat(firstSection[1].value),
                                Gesamte_Kosten: convertToFloat_1.convertToFloat(fifthSection[6].value),
                                Kosten_Anteil: 0,
                                Nichtumlagekosten: 0,
                                Umlagekosten: 0,
                            },
                            {
                                Abrechnungsposition: "Niederschlagswasser",
                                verteilt_nach: "Eigentumsanteil",
                                Gesamte_Einheiten: convertToFloat_1.convertToFloat(sixthSection[0].value),
                                Einheit_Anteil: convertToFloat_1.convertToFloat(sixthSection[1].value),
                                Gesamte_Kosten: convertToFloat_1.convertToFloat(fifthSection[7].value),
                                Kosten_Anteil: 0,
                                Nichtumlagekosten: 0,
                                Umlagekosten: 0,
                            },
                            {
                                Abrechnungsposition: "Bankgebühren",
                                verteilt_nach: "Eigentumsanteil",
                                Gesamte_Einheiten: convertToFloat_1.convertToFloat(sixthSection[0].value),
                                Einheit_Anteil: convertToFloat_1.convertToFloat(sixthSection[1].value),
                                Gesamte_Kosten: convertToFloat_1.convertToFloat(sixthSection[4].value),
                                Kosten_Anteil: 0,
                                Nichtumlagekosten: 0,
                                Umlagekosten: 0,
                            },
                            {
                                Abrechnungsposition: "Verwalter",
                                verteilt_nach: "Einheiten",
                                Gesamte_Einheiten: convertToFloat_1.convertToFloat(sixthSection[2].value),
                                Einheit_Anteil: convertToFloat_1.convertToFloat(sixthSection[3].value),
                                Gesamte_Kosten: convertToFloat_1.convertToFloat(sixthSection[5].value),
                                Kosten_Anteil: 0,
                                Nichtumlagekosten: 0,
                                Umlagekosten: 0,
                            },
                            {
                                Abrechnungsposition: "Instandhaltung",
                                verteilt_nach: "Eigentumsanteil",
                                Gesamte_Einheiten: convertToFloat_1.convertToFloat(sixthSection[0].value),
                                Einheit_Anteil: convertToFloat_1.convertToFloat(sixthSection[1].value),
                                Gesamte_Kosten: convertToFloat_1.convertToFloat(sixthSection[6].value),
                                Kosten_Anteil: 0,
                                Nichtumlagekosten: 0,
                                Umlagekosten: 0,
                            },
                        ],
                    })];
                case 11:
                    response = _s.sent();
                    console.log(response.data);
                    if ((_m = response.data) === null || _m === void 0 ? void 0 : _m.createEinzelabrechnung.Einzelabrechnungsdata) {
                        setSection("Bewohner/Eigentümer");
                    }
                    else {
                        console.log("errors");
                        console.log((_o = response.data) === null || _o === void 0 ? void 0 : _o.createEinzelabrechnung.errors);
                    }
                    return [3 /*break*/, 16];
                case 12:
                    if (checked === true) {
                        setSection("Bewohner");
                    }
                    else {
                    }
                    return [3 /*break*/, 16];
                case 13: return [4 /*yield*/, createBewohnerBetriebskosten({
                        Position: seventhSection[0].value,
                        Betrag: convertToFloat_1.convertToFloat(seventhSection[1].value)
                    })];
                case 14:
                    response = _s.sent();
                    if ((_p = response.data) === null || _p === void 0 ? void 0 : _p.createBewohnerBetriebskosten) {
                        console.log((_q = response.data) === null || _q === void 0 ? void 0 : _q.createBewohnerBetriebskosten.BewohnerBetribskostendata);
                        props.history.push("/display");
                    }
                    else {
                        console.log("errors");
                        console.log((_r = response.data) === null || _r === void 0 ? void 0 : _r.createBewohnerBetriebskosten.errors);
                    }
                    return [3 /*break*/, 16];
                case 15: return [3 /*break*/, 16];
                case 16: return [2 /*return*/];
            }
        });
    }); };
    var onChangeHandler = function (index, e) {
        var newValue = { value: e.target.value, error: "" };
        var newArr = __spreadArrays(firstSection);
        newArr[index] = newValue;
        console.log(newArr);
        setFirstSection(newArr);
    };
    var onChangeSecondSecHandler = function (index, e) {
        var newValue = { value: e.target.value, error: "" };
        var newArr = __spreadArrays(secondSection);
        newArr[index] = newValue;
        console.log(newArr);
        setSecondSection(newArr);
    };
    var onChangeThirdSecHandler = function (index, e) {
        var newValue = { value: e.target.value, error: "" };
        var newArr = __spreadArrays(thirdSection);
        newArr[index] = newValue;
        console.log(newArr);
        setThirdSection(newArr);
    };
    var onChangeForthSecHandler = function (index, e) {
        var newValue = { value: e.target.value, error: "" };
        var newArr = __spreadArrays(forthSection);
        newArr[index] = newValue;
        console.log(newArr);
        setforthSection(newArr);
    };
    var onChangeFifthSecHandler = function (index, e) {
        var newValue = { value: e.target.value, error: "" };
        var newArr = __spreadArrays(fifthSection);
        newArr[index] = newValue;
        console.log(newArr);
        setfifthSection(newArr);
    };
    var onChangeSixthSecHandler = function (index, e) {
        var newValue = { value: e.target.value, error: "" };
        var newArr = __spreadArrays(sixthSection);
        newArr[index] = newValue;
        console.log(newArr);
        setSixthSection(newArr);
    };
    var checkboxHandler = function (name, value) {
        setChecked(value);
        console.log(name, value);
    };
    var onChangeSeventhSecHandler = function (index, e) {
        var newValue = { value: e.target.value, error: "" };
        var newArr = __spreadArrays(seventhSection);
        newArr[index] = newValue;
        console.log(newArr);
        setSeventhSection(newArr);
    };
    var body;
    var childs;
    switch (section) {
        case "Allgemeine Fragen":
            childs = constants_1.QUESTIONS.data.map(function (question, index) {
                return (React.createElement(React.Fragment, null,
                    React.createElement(Input_1.default, { id: index, text: question.text, value: firstSection.length > index ? firstSection[index].value : "", onChange: function (e) {
                            return onChangeHandler(index, e);
                        }, error: firstSection.length > index ? firstSection[index].error : "", placheholder: question.placeholder }),
                    React.createElement("br", null)));
            });
            body = (React.createElement(React.Fragment, null,
                React.createElement("div", { style: { marginBottom: "40px" } },
                    React.createElement("h1", null, section)),
                React.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                    React.createElement("p", { style: { marginRight: "10px" } }, "1- Zu welchem Zeitraum m\u00F6chten Sie Ihre Abrechnung erstellen"),
                    React.createElement("br", null),
                    React.createElement("div", { style: { display: "flex", flexDirection: "row" } },
                        React.createElement("span", { style: { marginRight: "10px", marginLeft: "10px" } }, "von"),
                        React.createElement(react_datepicker_1.default, { selected: startDate, onChange: function (date) { return setStartDate(date); }, dateFormat: "MM/yyyy", showMonthYearPicker: true, showFullMonthYearPicker: true }),
                        React.createElement("span", { style: { marginRight: "10px", marginLeft: "10px" } }, "bis"),
                        React.createElement(react_datepicker_1.default, { selected: endDate, onChange: function (date) { return setEndDate(date); }, dateFormat: "MM/yyyy", showMonthYearPicker: true, showFullMonthYearPicker: true }))),
                React.createElement("br", null),
                childs));
            break;
        case "Heizkosten":
            body = (React.createElement(Section_1.default, { sectionMetaData: constants_1.HEIZKOSTEN.data, section: section, sectionBody: secondSection, onChangeInputHandler: onChangeSecondSecHandler }));
            break;
        case "Wasser":
            body = (React.createElement(Section_1.default, { sectionMetaData: constants_1.WASSER.data, section: section, sectionBody: thirdSection, onChangeInputHandler: onChangeThirdSecHandler }));
            break;
        case "Warmwasser/Abwasser":
            body = (React.createElement(Section_1.default, { sectionMetaData: constants_1.WARMWASSER_ABWASSER.data, section: section, sectionBody: forthSection, onChangeInputHandler: onChangeForthSecHandler }));
            break;
        case "Einzelabrechnung Teil1":
            body = (React.createElement(Section_1.default, { sectionMetaData: constants_1.EINZELABRECHNUNGT1.data, section: section, sectionBody: fifthSection, onChangeInputHandler: onChangeFifthSecHandler }));
            break;
        case "Einzelabrechnung Teil2":
            body = (React.createElement(Section_1.default, { sectionMetaData: constants_1.EINZELABRECHNUNGT2.data, section: section, sectionBody: sixthSection, onChangeInputHandler: onChangeSixthSecHandler }));
            break;
        case "Bewohner/Eigentümer":
            body = constants_1.PERSON.data.map(function (p) {
                return (React.createElement(Checkbox_1.default, { id: p.id, name: p.name, checkboxHandler: function (name, value) {
                        return checkboxHandler(name, value);
                    } }));
            });
            break;
        case "Bewohner":
            body = (React.createElement(Section_1.default, { sectionMetaData: constants_1.BEWOHNER.data, section: section, sectionBody: seventhSection, onChangeInputHandler: onChangeSeventhSecHandler }));
            break;
    }
    return (React.createElement(StyledForm_1.default, null,
        body,
        React.createElement(CustomizedButton_1.default, { class: "Next", type: "submit", onClick: onSubmit }, "Next")));
});
exports.default = Form;
/* setTimespan(prevState => (
            {...prevState, value: newValue, }
        )); */
//# sourceMappingURL=Form.js.map