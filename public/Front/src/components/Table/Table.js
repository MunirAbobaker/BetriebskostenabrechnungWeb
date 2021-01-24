"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Table_1 = require("material-ui/Table");
var core_1 = require("@material-ui/core");
var edit_1 = __importDefault(require("material-ui/svg-icons/image/edit"));
var check_1 = __importDefault(require("material-ui/svg-icons/navigation/check"));
var delete_1 = __importDefault(require("material-ui/svg-icons/action/delete"));
var material_ui_1 = require("material-ui");
var row = function (x, i, header, handleRemove, startEditing, editIdex, handleChange, stopEditing) {
    var currentlyEditing = editIdex === i;
    return (react_1.default.createElement(Table_1.TableRow, { key: "tr-" + i, selectable: false },
        header.map(function (y, k) { return (react_1.default.createElement(Table_1.TableRowColumn, { key: "trc-" + k }, currentlyEditing ? (react_1.default.createElement(material_ui_1.TextField, { name: y.prop, onChange: function (e) { return handleChange(e, y.prop, i); }, value: x[y.prop] })) : (x[y.prop]))); }),
        react_1.default.createElement(Table_1.TableRowColumn, null, currentlyEditing ? (react_1.default.createElement(check_1.default, { onClick: function () { return stopEditing(); } })) : (react_1.default.createElement(edit_1.default, { onClick: function () {
                return startEditing(i);
            } }))),
        react_1.default.createElement(Table_1.TableRowColumn, null,
            react_1.default.createElement(delete_1.default, { onClick: function () { return handleRemove(i); } }))));
};
exports.default = (function (_a) {
    var data = _a.data, header = _a.header, handleRemove = _a.handleRemove, startEditing = _a.startEditing, editIdex = _a.editIdex, handleChange = _a.handleChange, stopEditing = _a.stopEditing;
    return (react_1.default.createElement(core_1.TableContainer, { style: { overflowX: 'auto', paddingLeft: '12px', width: '90vw' } },
        react_1.default.createElement(Table_1.Table, null,
            react_1.default.createElement(Table_1.TableHeader, null,
                react_1.default.createElement(Table_1.TableRow, null,
                    header.map(function (x, i) { return (react_1.default.createElement(Table_1.TableHeaderColumn, { key: "thc-" + i }, x.name)); }),
                    react_1.default.createElement(Table_1.TableHeaderColumn, null),
                    react_1.default.createElement(Table_1.TableHeaderColumn, null))),
            react_1.default.createElement(Table_1.TableBody, null, data.map(function (x, i) {
                return row(x, i, header, handleRemove, startEditing, editIdex, handleChange, stopEditing);
            })))));
});
//# sourceMappingURL=Table.js.map