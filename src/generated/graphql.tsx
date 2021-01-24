import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  getHeizkosten: Heizkostenabrechnung;
  getEinzelabrechnung: Einzelabrechnung;
  getEinzelabrechnungen: Array<Einzelabrechnung>;
  getBewohnerBetriebskostenAbrechnung?: Maybe<BewohnerBetriebskostenResponse>;
  getBewohnerBetriebskostenAbrechnungen?: Maybe<Array<BewohnerBetriebskostenResponse>>;
  getAbrechnung: AbrechnungResponse;
  getAbrechnungen: Array<AbrechnungResponse>;
  getAllUserAbrechnungen: AbrechnungResponse;
  getAllegemeinebrechnung: AllgemeineResponse;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  address: Scalars['String'];
};

export type Heizkostenabrechnung = {
  __typename?: 'Heizkostenabrechnung';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  Abrechnung_Id: Scalars['String'];
  Kostenkonzept: Scalars['String'];
  Verteilschluessel_Einheit: Scalars['String'];
  Verteilschluessel: Scalars['Float'];
  Kosten_pro_Einheit: Scalars['Float'];
  Betrag_in_Euro: Scalars['Float'];
  Gesamt_in_Euro: Scalars['Float'];
};

export type Einzelabrechnung = {
  __typename?: 'Einzelabrechnung';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  AbrechnungsId: Scalars['String'];
  Abrechnungsposition: Scalars['String'];
  verteilt_nach: Scalars['String'];
  Gesamte_Einheiten: Scalars['Float'];
  Einheit_Anteil: Scalars['Float'];
  Einheit: Scalars['String'];
  Gesamte_Kosten: Scalars['Float'];
  Kosten_Anteil: Scalars['Float'];
};

export type BewohnerBetriebskostenResponse = {
  __typename?: 'BewohnerBetriebskostenResponse';
  errors?: Maybe<Array<FieldError>>;
  BewohnerBetribskostendata?: Maybe<BewohnerBetriebskosten>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type BewohnerBetriebskosten = {
  __typename?: 'BewohnerBetriebskosten';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  AbrechnungsId: Scalars['String'];
  Position: Scalars['String'];
  Betrag: Scalars['Float'];
};

export type AbrechnungResponse = {
  __typename?: 'AbrechnungResponse';
  errors?: Maybe<Array<FieldError>>;
  Abrechnungsdata?: Maybe<Abrechnung>;
  AbrechnungsdataArray?: Maybe<Array<Abrechnung>>;
};

export type Abrechnung = {
  __typename?: 'Abrechnung';
  AbrechnungsId: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  UserId: Scalars['String'];
  monatliche_Abschlag: Scalars['Float'];
  Abrechnungszeitraum: Scalars['Float'];
  Wohnflaeche: Scalars['Float'];
  Start_Data: Scalars['String'];
  End_Data: Scalars['String'];
};

export type AllgemeineResponse = {
  __typename?: 'AllgemeineResponse';
  id?: Maybe<Scalars['String']>;
  Betribskostenabrechnung?: Maybe<Scalars['Float']>;
  Nebenkostenvorrauszahlung?: Maybe<Scalars['Float']>;
  Grundsteuer?: Maybe<Scalars['Float']>;
  Rauchmelder?: Maybe<Scalars['Float']>;
  zuZahlendeKosten?: Maybe<Scalars['Float']>;
  wirdUeberwiesen?: Maybe<Scalars['Float']>;
  errors?: Maybe<Array<FieldError>>;
  AbrechnungsdataArray?: Maybe<Array<Abrechnung>>;
  HeizkostenAbrechnungsdataArray?: Maybe<Array<Heizkostenabrechnung>>;
  EinzelabrechnungsdataArray?: Maybe<Array<Einzelabrechnung>>;
  BewohnerBetribskostendata?: Maybe<BewohnerBetriebskosten>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  forgotPassword: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  createHeizkosten: HeizkostenabrechnungsResponse;
  updateHeizkosten: Scalars['Boolean'];
  createEinzelabrechnung: EinzelabrechnungsResponse;
  updateEinzelabrechnung: Scalars['Boolean'];
  createBewohnerBetriebskosten: BewohnerBetriebskostenResponse;
  updateBewohnerBetriebskostenAbrechnung: Scalars['Boolean'];
  createAbrechnung: AbrechnungResponse;
  setAbrechnungId: Scalars['Float'];
  updateTable: TableResponseType;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: RegisterInput;
};


export type MutationLoginArgs = {
  options: UsernamePasswordInput;
};


export type MutationCreateHeizkostenArgs = {
  options: Array<HeizkostenType>;
};


export type MutationUpdateHeizkostenArgs = {
  options: HeizkostenType;
};


export type MutationCreateEinzelabrechnungArgs = {
  options: Array<EinzelabrechnungType>;
};


export type MutationUpdateEinzelabrechnungArgs = {
  options: EinzelabrechnungType;
};


export type MutationCreateBewohnerBetriebskostenArgs = {
  options: BewohnerBetriebskostenType;
};


export type MutationUpdateBewohnerBetriebskostenAbrechnungArgs = {
  options: BewohnerBetriebskostenType;
};


export type MutationCreateAbrechnungArgs = {
  options: AbrechnungType;
};


export type MutationSetAbrechnungIdArgs = {
  AbrechnungsId: Scalars['Float'];
};


export type MutationUpdateTableArgs = {
  options: TableInputType;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type RegisterInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
  address: Scalars['String'];
};

export type UsernamePasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type HeizkostenabrechnungsResponse = {
  __typename?: 'HeizkostenabrechnungsResponse';
  errors?: Maybe<Array<FieldError>>;
  Abrechnungsdata?: Maybe<Heizkostenabrechnung>;
  AbrechnungsdataArray?: Maybe<Array<Heizkostenabrechnung>>;
};

export type HeizkostenType = {
  Kostenkonzept: Scalars['String'];
  Verteilschluessel: Scalars['Float'];
  Kosten_pro_Einheit: Scalars['Float'];
};

export type EinzelabrechnungsResponse = {
  __typename?: 'EinzelabrechnungsResponse';
  errors?: Maybe<Array<FieldError>>;
  Einzelabrechnungsdata?: Maybe<Einzelabrechnung>;
};

export type EinzelabrechnungType = {
  Abrechnungsposition: Scalars['String'];
  verteilt_nach: Scalars['String'];
  Gesamte_Einheiten: Scalars['Float'];
  Einheit_Anteil: Scalars['Float'];
  Einheit?: Maybe<Scalars['String']>;
  Gesamte_Kosten: Scalars['Float'];
  Kosten_Anteil: Scalars['Float'];
};

export type BewohnerBetriebskostenType = {
  Position: Scalars['String'];
  Betrag: Scalars['Float'];
};

export type AbrechnungType = {
  monatliche_Abschlag: Scalars['Float'];
  Wohnflaeche: Scalars['Float'];
  Start_Data: Scalars['String'];
  End_Data: Scalars['String'];
};

export type TableResponseType = {
  __typename?: 'TableResponseType';
  id?: Maybe<Scalars['String']>;
  Betribskostenabrechnung?: Maybe<Scalars['Float']>;
  Nebenkostenvorrauszahlung?: Maybe<Scalars['Float']>;
  Grundsteuer?: Maybe<Scalars['Float']>;
  Rauchmelder?: Maybe<Scalars['Float']>;
  zuZahlendeKosten?: Maybe<Scalars['Float']>;
  wirdUeberwiesen?: Maybe<Scalars['Float']>;
  errors?: Maybe<Array<FieldError>>;
  AbrechnungsdataArray?: Maybe<Array<Abrechnung>>;
  HeizkostenAbrechnungsdataArray?: Maybe<Array<Heizkostenabrechnung>>;
  EinzelabrechnungsdataArray?: Maybe<Array<Einzelabrechnung>>;
  BewohnerBetribskostendata?: Maybe<BewohnerBetriebskosten>;
};

export type TableInputType = {
  Aktion?: Maybe<Scalars['String']>;
  Betribskostenabrechnung?: Maybe<Scalars['Float']>;
  Nebenkostenvorrauszahlung?: Maybe<Scalars['Float']>;
  Grundsteuer?: Maybe<Scalars['Float']>;
  Rauchmelder?: Maybe<Scalars['Float']>;
  zuZahlendeKosten?: Maybe<Scalars['Float']>;
  wirdUeberwiesen?: Maybe<Scalars['Float']>;
  AbrechnungsInput?: Maybe<AbrechnungType>;
  HeizkostenAbrechnungsInputArray?: Maybe<Array<HeizkostenType>>;
  EinzelabrechnungsInputArray?: Maybe<Array<EinzelabrechnungType>>;
  BewohnerBetribsInputdata?: Maybe<BewohnerBetriebskostenType>;
};

export type AbrechnungsResponseFragment = (
  { __typename?: 'Abrechnung' }
  & Pick<Abrechnung, 'AbrechnungsId' | 'monatliche_Abschlag' | 'Abrechnungszeitraum' | 'Wohnflaeche' | 'Start_Data' | 'End_Data'>
);

export type AbrechnungsergebnisseFragment = (
  { __typename?: 'Abrechnung' }
  & Pick<Abrechnung, 'AbrechnungsId' | 'UserId' | 'Abrechnungszeitraum'>
);

export type EinzelabrechnungsergebnisseFragment = (
  { __typename?: 'Einzelabrechnung' }
  & Pick<Einzelabrechnung, 'id' | 'Abrechnungsposition' | 'verteilt_nach' | 'Gesamte_Einheiten' | 'Einheit_Anteil' | 'Einheit' | 'Gesamte_Kosten' | 'Kosten_Anteil'>
);

export type HeizkostenabrechnungsResponseFragment = (
  { __typename?: 'Heizkostenabrechnung' }
  & Pick<Heizkostenabrechnung, 'id' | 'Kostenkonzept' | 'Verteilschluessel_Einheit' | 'Verteilschluessel' | 'Kosten_pro_Einheit' | 'Betrag_in_Euro' | 'Gesamt_in_Euro'>
);

export type HeizkostenergebnisseFragment = (
  { __typename?: 'Heizkostenabrechnung' }
  & Pick<Heizkostenabrechnung, 'Kostenkonzept' | 'Verteilschluessel' | 'Verteilschluessel_Einheit'>
);

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type CreateBewohnerBetriebskostenMutationVariables = Exact<{
  Position: Scalars['String'];
  Betrag: Scalars['Float'];
}>;


export type CreateBewohnerBetriebskostenMutation = (
  { __typename?: 'Mutation' }
  & { createBewohnerBetriebskosten: (
    { __typename?: 'BewohnerBetriebskostenResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>>, BewohnerBetribskostendata?: Maybe<(
      { __typename?: 'BewohnerBetriebskosten' }
      & Pick<BewohnerBetriebskosten, 'Position' | 'Betrag'>
    )> }
  ) }
);

export type CreateEinzelabrechnungMutationVariables = Exact<{
  options: Array<EinzelabrechnungType>;
}>;


export type CreateEinzelabrechnungMutation = (
  { __typename?: 'Mutation' }
  & { createEinzelabrechnung: (
    { __typename?: 'EinzelabrechnungsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>>, Einzelabrechnungsdata?: Maybe<(
      { __typename?: 'Einzelabrechnung' }
      & Pick<Einzelabrechnung, 'Abrechnungsposition'>
    )> }
  ) }
);

export type CreateHeizkostenabrechnungMutationVariables = Exact<{
  options: Array<HeizkostenType>;
}>;


export type CreateHeizkostenabrechnungMutation = (
  { __typename?: 'Mutation' }
  & { createHeizkosten: (
    { __typename?: 'HeizkostenabrechnungsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>>, Abrechnungsdata?: Maybe<(
      { __typename?: 'Heizkostenabrechnung' }
      & HeizkostenergebnisseFragment
    )> }
  ) }
);

export type CreateInvoiceMutationVariables = Exact<{
  monatliche_Abschlag: Scalars['Float'];
  Wohnflaeche: Scalars['Float'];
  Start_Data: Scalars['String'];
  End_Data: Scalars['String'];
}>;


export type CreateInvoiceMutation = (
  { __typename?: 'Mutation' }
  & { createAbrechnung: (
    { __typename?: 'AbrechnungResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>>, Abrechnungsdata?: Maybe<(
      { __typename?: 'Abrechnung' }
      & AbrechnungsergebnisseFragment
    )> }
  ) }
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  address: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type SetAbrechnungIdMutationVariables = Exact<{
  AbrechnungsId: Scalars['Float'];
}>;


export type SetAbrechnungIdMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'setAbrechnungId'>
);

export type UpdateTableMutationVariables = Exact<{
  Aktion?: Maybe<Scalars['String']>;
  AbrechnungsInput: AbrechnungType;
  HeizkostenAbrechnungsInputArray: Array<HeizkostenType>;
  EinzelabrechnungsInputArray: Array<EinzelabrechnungType>;
  BewohnerBetribsInputdata: BewohnerBetriebskostenType;
  Betribskostenabrechnung?: Maybe<Scalars['Float']>;
  Nebenkostenvorrauszahlung?: Maybe<Scalars['Float']>;
  Grundsteuer?: Maybe<Scalars['Float']>;
  Rauchmelder?: Maybe<Scalars['Float']>;
  zuZahlendeKosten?: Maybe<Scalars['Float']>;
  wirdUeberwiesen?: Maybe<Scalars['Float']>;
}>;


export type UpdateTableMutation = (
  { __typename?: 'Mutation' }
  & { updateTable: (
    { __typename?: 'TableResponseType' }
    & Pick<TableResponseType, 'Betribskostenabrechnung' | 'Nebenkostenvorrauszahlung' | 'Grundsteuer' | 'Rauchmelder' | 'zuZahlendeKosten' | 'wirdUeberwiesen'>
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>>, AbrechnungsdataArray?: Maybe<Array<(
      { __typename?: 'Abrechnung' }
      & AbrechnungsResponseFragment
    )>>, HeizkostenAbrechnungsdataArray?: Maybe<Array<(
      { __typename?: 'Heizkostenabrechnung' }
      & HeizkostenabrechnungsResponseFragment
    )>>, EinzelabrechnungsdataArray?: Maybe<Array<(
      { __typename?: 'Einzelabrechnung' }
      & EinzelabrechnungsergebnisseFragment
    )>>, BewohnerBetribskostendata?: Maybe<(
      { __typename?: 'BewohnerBetriebskosten' }
      & Pick<BewohnerBetriebskosten, 'Position' | 'Betrag'>
    )> }
  ) }
);

export type GetAllUserAbrechnungenQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserAbrechnungenQuery = (
  { __typename?: 'Query' }
  & { getAllUserAbrechnungen: (
    { __typename?: 'AbrechnungResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, AbrechnungsdataArray?: Maybe<Array<(
      { __typename?: 'Abrechnung' }
      & Pick<Abrechnung, 'AbrechnungsId' | 'Start_Data' | 'End_Data'>
    )>> }
  ) }
);

export type GetGesamteAbrechnungQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGesamteAbrechnungQuery = (
  { __typename?: 'Query' }
  & { getAllegemeinebrechnung: (
    { __typename?: 'AllgemeineResponse' }
    & Pick<AllgemeineResponse, 'id' | 'Betribskostenabrechnung' | 'Nebenkostenvorrauszahlung' | 'Grundsteuer' | 'Rauchmelder' | 'zuZahlendeKosten' | 'wirdUeberwiesen'>
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, AbrechnungsdataArray?: Maybe<Array<(
      { __typename?: 'Abrechnung' }
      & Pick<Abrechnung, 'AbrechnungsId' | 'monatliche_Abschlag' | 'Wohnflaeche' | 'Start_Data' | 'End_Data'>
    )>>, EinzelabrechnungsdataArray?: Maybe<Array<(
      { __typename?: 'Einzelabrechnung' }
      & Pick<Einzelabrechnung, 'id' | 'Abrechnungsposition' | 'verteilt_nach' | 'Gesamte_Einheiten' | 'Einheit_Anteil' | 'Einheit' | 'Gesamte_Kosten' | 'Kosten_Anteil'>
    )>>, HeizkostenAbrechnungsdataArray?: Maybe<Array<(
      { __typename?: 'Heizkostenabrechnung' }
      & Pick<Heizkostenabrechnung, 'id' | 'Kostenkonzept' | 'Verteilschluessel_Einheit' | 'Verteilschluessel' | 'Kosten_pro_Einheit' | 'Betrag_in_Euro' | 'Gesamt_in_Euro'>
    )>>, BewohnerBetribskostendata?: Maybe<(
      { __typename?: 'BewohnerBetriebskosten' }
      & Pick<BewohnerBetriebskosten, 'id' | 'Betrag'>
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export const AbrechnungsResponseFragmentDoc = gql`
    fragment AbrechnungsResponse on Abrechnung {
  AbrechnungsId
  monatliche_Abschlag
  Abrechnungszeitraum
  Wohnflaeche
  Start_Data
  End_Data
}
    `;
export const AbrechnungsergebnisseFragmentDoc = gql`
    fragment Abrechnungsergebnisse on Abrechnung {
  AbrechnungsId
  UserId
  Abrechnungszeitraum
}
    `;
export const EinzelabrechnungsergebnisseFragmentDoc = gql`
    fragment Einzelabrechnungsergebnisse on Einzelabrechnung {
  id
  Abrechnungsposition
  verteilt_nach
  Gesamte_Einheiten
  Einheit_Anteil
  Einheit
  Gesamte_Kosten
  Kosten_Anteil
}
    `;
export const HeizkostenabrechnungsResponseFragmentDoc = gql`
    fragment HeizkostenabrechnungsResponse on Heizkostenabrechnung {
  id
  Kostenkonzept
  Verteilschluessel_Einheit
  Verteilschluessel
  Kosten_pro_Einheit
  Kosten_pro_Einheit
  Betrag_in_Euro
  Gesamt_in_Euro
}
    `;
export const HeizkostenergebnisseFragmentDoc = gql`
    fragment Heizkostenergebnisse on Heizkostenabrechnung {
  Kostenkonzept
  Verteilschluessel
  Verteilschluessel_Einheit
}
    `;
export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const CreateBewohnerBetriebskostenDocument = gql`
    mutation createBewohnerBetriebskosten($Position: String!, $Betrag: Float!) {
  createBewohnerBetriebskosten(options: {Position: $Position, Betrag: $Betrag}) {
    errors {
      ...RegularError
    }
    BewohnerBetribskostendata {
      Position
      Betrag
    }
  }
}
    ${RegularErrorFragmentDoc}`;

export function useCreateBewohnerBetriebskostenMutation() {
  return Urql.useMutation<CreateBewohnerBetriebskostenMutation, CreateBewohnerBetriebskostenMutationVariables>(CreateBewohnerBetriebskostenDocument);
};
export const CreateEinzelabrechnungDocument = gql`
    mutation createEinzelabrechnung($options: [EinzelabrechnungType!]!) {
  createEinzelabrechnung(options: $options) {
    errors {
      ...RegularError
    }
    Einzelabrechnungsdata {
      Abrechnungsposition
    }
  }
}
    ${RegularErrorFragmentDoc}`;

export function useCreateEinzelabrechnungMutation() {
  return Urql.useMutation<CreateEinzelabrechnungMutation, CreateEinzelabrechnungMutationVariables>(CreateEinzelabrechnungDocument);
};
export const CreateHeizkostenabrechnungDocument = gql`
    mutation createHeizkostenabrechnung($options: [HeizkostenType!]!) {
  createHeizkosten(options: $options) {
    errors {
      ...RegularError
    }
    Abrechnungsdata {
      ...Heizkostenergebnisse
    }
  }
}
    ${RegularErrorFragmentDoc}
${HeizkostenergebnisseFragmentDoc}`;

export function useCreateHeizkostenabrechnungMutation() {
  return Urql.useMutation<CreateHeizkostenabrechnungMutation, CreateHeizkostenabrechnungMutationVariables>(CreateHeizkostenabrechnungDocument);
};
export const CreateInvoiceDocument = gql`
    mutation createInvoice($monatliche_Abschlag: Float!, $Wohnflaeche: Float!, $Start_Data: String!, $End_Data: String!) {
  createAbrechnung(
    options: {monatliche_Abschlag: $monatliche_Abschlag, Wohnflaeche: $Wohnflaeche, Start_Data: $Start_Data, End_Data: $End_Data}
  ) {
    errors {
      ...RegularError
    }
    Abrechnungsdata {
      ...Abrechnungsergebnisse
    }
  }
}
    ${RegularErrorFragmentDoc}
${AbrechnungsergebnisseFragmentDoc}`;

export function useCreateInvoiceMutation() {
  return Urql.useMutation<CreateInvoiceMutation, CreateInvoiceMutationVariables>(CreateInvoiceDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(options: {email: $email, password: $password}) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($firstName: String!, $lastName: String!, $email: String!, $username: String!, $password: String!, $address: String!) {
  register(
    options: {firstName: $firstName, lastName: $lastName, email: $email, username: $username, password: $password, address: $address}
  ) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const SetAbrechnungIdDocument = gql`
    mutation setAbrechnungId($AbrechnungsId: Float!) {
  setAbrechnungId(AbrechnungsId: $AbrechnungsId)
}
    `;

export function useSetAbrechnungIdMutation() {
  return Urql.useMutation<SetAbrechnungIdMutation, SetAbrechnungIdMutationVariables>(SetAbrechnungIdDocument);
};
export const UpdateTableDocument = gql`
    mutation UpdateTable($Aktion: String, $AbrechnungsInput: AbrechnungType!, $HeizkostenAbrechnungsInputArray: [HeizkostenType!]!, $EinzelabrechnungsInputArray: [EinzelabrechnungType!]!, $BewohnerBetribsInputdata: BewohnerBetriebskostenType!, $Betribskostenabrechnung: Float, $Nebenkostenvorrauszahlung: Float, $Grundsteuer: Float, $Rauchmelder: Float, $zuZahlendeKosten: Float, $wirdUeberwiesen: Float) {
  updateTable(
    options: {Aktion: $Aktion, Betribskostenabrechnung: $Betribskostenabrechnung, Nebenkostenvorrauszahlung: $Nebenkostenvorrauszahlung, Grundsteuer: $Grundsteuer, Rauchmelder: $Rauchmelder, zuZahlendeKosten: $zuZahlendeKosten, wirdUeberwiesen: $wirdUeberwiesen, HeizkostenAbrechnungsInputArray: $HeizkostenAbrechnungsInputArray, AbrechnungsInput: $AbrechnungsInput, EinzelabrechnungsInputArray: $EinzelabrechnungsInputArray, BewohnerBetribsInputdata: $BewohnerBetribsInputdata}
  ) {
    errors {
      ...RegularError
    }
    Betribskostenabrechnung
    Nebenkostenvorrauszahlung
    Grundsteuer
    Rauchmelder
    zuZahlendeKosten
    wirdUeberwiesen
    AbrechnungsdataArray {
      ...AbrechnungsResponse
    }
    HeizkostenAbrechnungsdataArray {
      ...HeizkostenabrechnungsResponse
    }
    EinzelabrechnungsdataArray {
      ...Einzelabrechnungsergebnisse
    }
    BewohnerBetribskostendata {
      Position
      Betrag
    }
  }
}
    ${RegularErrorFragmentDoc}
${AbrechnungsResponseFragmentDoc}
${HeizkostenabrechnungsResponseFragmentDoc}
${EinzelabrechnungsergebnisseFragmentDoc}`;

export function useUpdateTableMutation() {
  return Urql.useMutation<UpdateTableMutation, UpdateTableMutationVariables>(UpdateTableDocument);
};
export const GetAllUserAbrechnungenDocument = gql`
    query getAllUserAbrechnungen {
  getAllUserAbrechnungen {
    errors {
      field
      message
    }
    AbrechnungsdataArray {
      AbrechnungsId
      Start_Data
      End_Data
    }
  }
}
    `;

export function useGetAllUserAbrechnungenQuery(options: Omit<Urql.UseQueryArgs<GetAllUserAbrechnungenQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllUserAbrechnungenQuery>({ query: GetAllUserAbrechnungenDocument, ...options });
};
export const GetGesamteAbrechnungDocument = gql`
    query GetGesamteAbrechnung {
  getAllegemeinebrechnung {
    id
    Betribskostenabrechnung
    Nebenkostenvorrauszahlung
    Grundsteuer
    Rauchmelder
    zuZahlendeKosten
    wirdUeberwiesen
    errors {
      field
      message
    }
    AbrechnungsdataArray {
      AbrechnungsId
      monatliche_Abschlag
      Wohnflaeche
      Start_Data
      End_Data
    }
    EinzelabrechnungsdataArray {
      id
      Abrechnungsposition
      verteilt_nach
      Gesamte_Einheiten
      Einheit_Anteil
      Einheit
      Gesamte_Kosten
      Kosten_Anteil
    }
    HeizkostenAbrechnungsdataArray {
      id
      Kostenkonzept
      Verteilschluessel_Einheit
      Verteilschluessel
      Kosten_pro_Einheit
      Kosten_pro_Einheit
      Betrag_in_Euro
      Gesamt_in_Euro
    }
    BewohnerBetribskostendata {
      id
      Betrag
    }
  }
}
    `;

export function useGetGesamteAbrechnungQuery(options: Omit<Urql.UseQueryArgs<GetGesamteAbrechnungQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetGesamteAbrechnungQuery>({ query: GetGesamteAbrechnungDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};