"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function Wrapper(props) {
    return (react_1.default.createElement("h1", null, "not used")
    /*  <ThemeConsumer>
         {theme => (
             <StyledCard variant="primary">
                 {props.children}
             </StyledCard>)}
     </ThemeConsumer> */
    );
}
exports.default = Wrapper;
//# sourceMappingURL=Wrapper.js.map