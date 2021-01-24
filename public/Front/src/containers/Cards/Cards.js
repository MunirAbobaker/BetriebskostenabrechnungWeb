"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var react_1 = __importStar(require("react"));
var Card_1 = __importDefault(require("./Card/Card"));
var styled_components_1 = require("styled-components");
var Button_1 = require("../../helpers/Button");
var Cards = /** @class */ (function (_super) {
    __extends(Cards, _super);
    function Cards() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cardToRender = function () {
            var cards = [];
            _this.props.cardsData.forEach(function (card) {
                if (_this.props.userLoggedIn) {
                    if (card.id != "login") {
                        cards.push(card);
                    }
                }
                else {
                    if (card.id != "logout") {
                        cards.push(card);
                    }
                }
            });
            return cards;
        };
        return _this;
    }
    Cards.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(react_1.default.Fragment, null, this.cardToRender().map(function (card) {
            return (react_1.default.createElement(styled_components_1.ThemeConsumer, null, function (theme) { return (react_1.default.createElement(Button_1.Card, { variant: "primary", className: _this.props.userLoggedIn && card.id === "register"
                    ? "NotAllowed"
                    : "" },
                react_1.default.createElement(Card_1.default, { cardInfos: card, userLoggedIn: _this.props.userLoggedIn }))); }));
        })));
    };
    return Cards;
}(react_1.Component));
exports.default = Cards;
{
    /* <Wrapper >
                      <Card cardInfos={card} userLoggedIn={this.props.userLoggedIn} />
                   </Wrapper> */
}
//# sourceMappingURL=Cards.js.map