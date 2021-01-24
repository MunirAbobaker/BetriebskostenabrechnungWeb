"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMeQuery = exports.MeDocument = exports.useGetGesamteAbrechnungQuery = exports.GetGesamteAbrechnungDocument = exports.useRegisterMutation = exports.RegisterDocument = exports.useLogoutMutation = exports.LogoutDocument = exports.useLoginMutation = exports.LoginDocument = exports.useForgotPasswordMutation = exports.ForgotPasswordDocument = exports.useCreateInvoiceMutation = exports.CreateInvoiceDocument = exports.useCreateHeizkostenabrechnungMutation = exports.CreateHeizkostenabrechnungDocument = exports.useCreateEinzelabrechnungMutation = exports.CreateEinzelabrechnungDocument = exports.useCreateBewohnerBetriebskostenMutation = exports.CreateBewohnerBetriebskostenDocument = exports.useChangePasswordMutation = exports.ChangePasswordDocument = exports.RegularUserResponseFragmentDoc = exports.RegularUserFragmentDoc = exports.RegularErrorFragmentDoc = exports.HeizkostenergebnisseFragmentDoc = exports.AbrechnungsergebnisseFragmentDoc = void 0;
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var Urql = __importStar(require("urql"));
exports.AbrechnungsergebnisseFragmentDoc = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    fragment Abrechnungsergebnisse on Abrechnung {\n  AbrechnungsId\n  UserId\n  Abrechnungszeitraum\n}\n    "], ["\n    fragment Abrechnungsergebnisse on Abrechnung {\n  AbrechnungsId\n  UserId\n  Abrechnungszeitraum\n}\n    "])));
exports.HeizkostenergebnisseFragmentDoc = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    fragment Heizkostenergebnisse on Heizkostenabrechnung {\n  Kostenkonzept\n  Verteilschluessel\n  Verteilschluessel_Einheit\n}\n    "], ["\n    fragment Heizkostenergebnisse on Heizkostenabrechnung {\n  Kostenkonzept\n  Verteilschluessel\n  Verteilschluessel_Einheit\n}\n    "])));
exports.RegularErrorFragmentDoc = graphql_tag_1.default(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    fragment RegularError on FieldError {\n  field\n  message\n}\n    "], ["\n    fragment RegularError on FieldError {\n  field\n  message\n}\n    "])));
exports.RegularUserFragmentDoc = graphql_tag_1.default(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    fragment RegularUser on User {\n  id\n  username\n}\n    "], ["\n    fragment RegularUser on User {\n  id\n  username\n}\n    "])));
exports.RegularUserResponseFragmentDoc = graphql_tag_1.default(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    fragment RegularUserResponse on UserResponse {\n  errors {\n    ...RegularError\n  }\n  user {\n    ...RegularUser\n  }\n}\n    ", "\n", ""], ["\n    fragment RegularUserResponse on UserResponse {\n  errors {\n    ...RegularError\n  }\n  user {\n    ...RegularUser\n  }\n}\n    ", "\n", ""])), exports.RegularErrorFragmentDoc, exports.RegularUserFragmentDoc);
exports.ChangePasswordDocument = graphql_tag_1.default(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    mutation ChangePassword($token: String!, $newPassword: String!) {\n  changePassword(token: $token, newPassword: $newPassword) {\n    ...RegularUserResponse\n  }\n}\n    ", ""], ["\n    mutation ChangePassword($token: String!, $newPassword: String!) {\n  changePassword(token: $token, newPassword: $newPassword) {\n    ...RegularUserResponse\n  }\n}\n    ", ""])), exports.RegularUserResponseFragmentDoc);
function useChangePasswordMutation() {
    return Urql.useMutation(exports.ChangePasswordDocument);
}
exports.useChangePasswordMutation = useChangePasswordMutation;
;
exports.CreateBewohnerBetriebskostenDocument = graphql_tag_1.default(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    mutation createBewohnerBetriebskosten($Position: String!, $Betrag: Float!) {\n  createBewohnerBetriebskosten(options: {Position: $Position, Betrag: $Betrag}) {\n    errors {\n      ...RegularError\n    }\n    BewohnerBetribskostendata {\n      Position\n      Betrag\n    }\n  }\n}\n    ", ""], ["\n    mutation createBewohnerBetriebskosten($Position: String!, $Betrag: Float!) {\n  createBewohnerBetriebskosten(options: {Position: $Position, Betrag: $Betrag}) {\n    errors {\n      ...RegularError\n    }\n    BewohnerBetribskostendata {\n      Position\n      Betrag\n    }\n  }\n}\n    ", ""])), exports.RegularErrorFragmentDoc);
function useCreateBewohnerBetriebskostenMutation() {
    return Urql.useMutation(exports.CreateBewohnerBetriebskostenDocument);
}
exports.useCreateBewohnerBetriebskostenMutation = useCreateBewohnerBetriebskostenMutation;
;
exports.CreateEinzelabrechnungDocument = graphql_tag_1.default(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    mutation createEinzelabrechnung($options: [EinzelabrechnungType!]!) {\n  createEinzelabrechnung(options: $options) {\n    errors {\n      ...RegularError\n    }\n    Einzelabrechnungsdata {\n      Abrechnungsposition\n    }\n  }\n}\n    ", ""], ["\n    mutation createEinzelabrechnung($options: [EinzelabrechnungType!]!) {\n  createEinzelabrechnung(options: $options) {\n    errors {\n      ...RegularError\n    }\n    Einzelabrechnungsdata {\n      Abrechnungsposition\n    }\n  }\n}\n    ", ""])), exports.RegularErrorFragmentDoc);
function useCreateEinzelabrechnungMutation() {
    return Urql.useMutation(exports.CreateEinzelabrechnungDocument);
}
exports.useCreateEinzelabrechnungMutation = useCreateEinzelabrechnungMutation;
;
exports.CreateHeizkostenabrechnungDocument = graphql_tag_1.default(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    mutation createHeizkostenabrechnung($options: [HeizkostenType!]!) {\n  createHeizkosten(options: $options) {\n    errors {\n      ...RegularError\n    }\n    Abrechnungsdata {\n      ...Heizkostenergebnisse\n    }\n  }\n}\n    ", "\n", ""], ["\n    mutation createHeizkostenabrechnung($options: [HeizkostenType!]!) {\n  createHeizkosten(options: $options) {\n    errors {\n      ...RegularError\n    }\n    Abrechnungsdata {\n      ...Heizkostenergebnisse\n    }\n  }\n}\n    ", "\n", ""])), exports.RegularErrorFragmentDoc, exports.HeizkostenergebnisseFragmentDoc);
function useCreateHeizkostenabrechnungMutation() {
    return Urql.useMutation(exports.CreateHeizkostenabrechnungDocument);
}
exports.useCreateHeizkostenabrechnungMutation = useCreateHeizkostenabrechnungMutation;
;
exports.CreateInvoiceDocument = graphql_tag_1.default(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    mutation createInvoice($monatliche_Abschlag: Float!, $Wohnflaeche: Float!, $Start_Data: String!, $End_Data: String!) {\n  createAbrechnung(\n    options: {monatliche_Abschlag: $monatliche_Abschlag, Wohnflaeche: $Wohnflaeche, Start_Data: $Start_Data, End_Data: $End_Data}\n  ) {\n    errors {\n      ...RegularError\n    }\n    Abrechnungsdata {\n      ...Abrechnungsergebnisse\n    }\n  }\n}\n    ", "\n", ""], ["\n    mutation createInvoice($monatliche_Abschlag: Float!, $Wohnflaeche: Float!, $Start_Data: String!, $End_Data: String!) {\n  createAbrechnung(\n    options: {monatliche_Abschlag: $monatliche_Abschlag, Wohnflaeche: $Wohnflaeche, Start_Data: $Start_Data, End_Data: $End_Data}\n  ) {\n    errors {\n      ...RegularError\n    }\n    Abrechnungsdata {\n      ...Abrechnungsergebnisse\n    }\n  }\n}\n    ", "\n", ""])), exports.RegularErrorFragmentDoc, exports.AbrechnungsergebnisseFragmentDoc);
function useCreateInvoiceMutation() {
    return Urql.useMutation(exports.CreateInvoiceDocument);
}
exports.useCreateInvoiceMutation = useCreateInvoiceMutation;
;
exports.ForgotPasswordDocument = graphql_tag_1.default(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    mutation ForgotPassword($email: String!) {\n  forgotPassword(email: $email)\n}\n    "], ["\n    mutation ForgotPassword($email: String!) {\n  forgotPassword(email: $email)\n}\n    "])));
function useForgotPasswordMutation() {
    return Urql.useMutation(exports.ForgotPasswordDocument);
}
exports.useForgotPasswordMutation = useForgotPasswordMutation;
;
exports.LoginDocument = graphql_tag_1.default(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    mutation Login($email: String!, $password: String!) {\n  login(options: {email: $email, password: $password}) {\n    ...RegularUserResponse\n  }\n}\n    ", ""], ["\n    mutation Login($email: String!, $password: String!) {\n  login(options: {email: $email, password: $password}) {\n    ...RegularUserResponse\n  }\n}\n    ", ""])), exports.RegularUserResponseFragmentDoc);
function useLoginMutation() {
    return Urql.useMutation(exports.LoginDocument);
}
exports.useLoginMutation = useLoginMutation;
;
exports.LogoutDocument = graphql_tag_1.default(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    mutation logout {\n  logout\n}\n    "], ["\n    mutation logout {\n  logout\n}\n    "])));
function useLogoutMutation() {
    return Urql.useMutation(exports.LogoutDocument);
}
exports.useLogoutMutation = useLogoutMutation;
;
exports.RegisterDocument = graphql_tag_1.default(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    mutation Register($firstName: String!, $lastName: String!, $email: String!, $username: String!, $password: String!, $address: String!) {\n  register(\n    options: {firstName: $firstName, lastName: $lastName, email: $email, username: $username, password: $password, address: $address}\n  ) {\n    ...RegularUserResponse\n  }\n}\n    ", ""], ["\n    mutation Register($firstName: String!, $lastName: String!, $email: String!, $username: String!, $password: String!, $address: String!) {\n  register(\n    options: {firstName: $firstName, lastName: $lastName, email: $email, username: $username, password: $password, address: $address}\n  ) {\n    ...RegularUserResponse\n  }\n}\n    ", ""])), exports.RegularUserResponseFragmentDoc);
function useRegisterMutation() {
    return Urql.useMutation(exports.RegisterDocument);
}
exports.useRegisterMutation = useRegisterMutation;
;
exports.GetGesamteAbrechnungDocument = graphql_tag_1.default(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    query GetGesamteAbrechnung {\n  getAllegemeinebrechnung {\n    errors {\n      field\n      message\n    }\n    AbrechnungsdataArray {\n      AbrechnungsId\n      monatliche_Abschlag\n      Wohnflaeche\n      Start_Data\n      End_Data\n    }\n    EinzelabrechnungsdataArray {\n      id\n      Abrechnungsposition\n      verteilt_nach\n      Gesamte_Einheiten\n      Gesamte_Kosten\n      Einheit_Anteil\n      Kosten_Anteil\n      Einheit\n    }\n    HeizkostenAbrechnungsdataArray {\n      id\n      Kostenkonzept\n      Verteilschluessel_Einheit\n      Verteilschluessel\n      Kosten_pro_Einheit\n      Kosten_pro_Einheit\n      Betrag_in_Euro\n      Gesamt_in_Euro\n    }\n    BewohnerBetribskostendata {\n      id\n      Betrag\n    }\n  }\n}\n    "], ["\n    query GetGesamteAbrechnung {\n  getAllegemeinebrechnung {\n    errors {\n      field\n      message\n    }\n    AbrechnungsdataArray {\n      AbrechnungsId\n      monatliche_Abschlag\n      Wohnflaeche\n      Start_Data\n      End_Data\n    }\n    EinzelabrechnungsdataArray {\n      id\n      Abrechnungsposition\n      verteilt_nach\n      Gesamte_Einheiten\n      Gesamte_Kosten\n      Einheit_Anteil\n      Kosten_Anteil\n      Einheit\n    }\n    HeizkostenAbrechnungsdataArray {\n      id\n      Kostenkonzept\n      Verteilschluessel_Einheit\n      Verteilschluessel\n      Kosten_pro_Einheit\n      Kosten_pro_Einheit\n      Betrag_in_Euro\n      Gesamt_in_Euro\n    }\n    BewohnerBetribskostendata {\n      id\n      Betrag\n    }\n  }\n}\n    "])));
function useGetGesamteAbrechnungQuery(options) {
    if (options === void 0) { options = {}; }
    return Urql.useQuery(__assign({ query: exports.GetGesamteAbrechnungDocument }, options));
}
exports.useGetGesamteAbrechnungQuery = useGetGesamteAbrechnungQuery;
;
exports.MeDocument = graphql_tag_1.default(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    query Me {\n  me {\n    ...RegularUser\n  }\n}\n    ", ""], ["\n    query Me {\n  me {\n    ...RegularUser\n  }\n}\n    ", ""])), exports.RegularUserFragmentDoc);
function useMeQuery(options) {
    if (options === void 0) { options = {}; }
    return Urql.useQuery(__assign({ query: exports.MeDocument }, options));
}
exports.useMeQuery = useMeQuery;
;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
//# sourceMappingURL=graphql.js.map