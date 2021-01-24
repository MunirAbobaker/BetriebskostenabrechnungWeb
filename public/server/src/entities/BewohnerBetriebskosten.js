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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BewohnerBetriebskosten = void 0;
var type_graphql_1 = require("type-graphql");
var typeorm_1 = require("typeorm");
var BewohnerBetriebskosten = /** @class */ (function (_super) {
    __extends(BewohnerBetriebskosten, _super);
    function BewohnerBetriebskosten() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.PrimaryGeneratedColumn()
    ], BewohnerBetriebskosten.prototype, "id", void 0);
    __decorate([
        type_graphql_1.Field(function () { return String; }),
        typeorm_1.CreateDateColumn()
    ], BewohnerBetriebskosten.prototype, "createdAt", void 0);
    __decorate([
        type_graphql_1.Field(function () { return String; }),
        typeorm_1.UpdateDateColumn()
    ], BewohnerBetriebskosten.prototype, "updatedAt", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column()
    ], BewohnerBetriebskosten.prototype, "AbrechnungsId", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column({ nullable: true })
    ], BewohnerBetriebskosten.prototype, "Position", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column({ type: "float", nullable: true })
    ], BewohnerBetriebskosten.prototype, "Betrag", void 0);
    BewohnerBetriebskosten = __decorate([
        type_graphql_1.ObjectType(),
        typeorm_1.Entity()
    ], BewohnerBetriebskosten);
    return BewohnerBetriebskosten;
}(typeorm_1.BaseEntity));
exports.BewohnerBetriebskosten = BewohnerBetriebskosten;
//# sourceMappingURL=BewohnerBetriebskosten.js.map