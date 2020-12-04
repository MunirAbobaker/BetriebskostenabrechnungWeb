import React, {Component} from "react";
import { Route, Switch} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from "material-ui/styles/";

/* import Form from '../components/Form/Form'; */
import Cards from './Cards/Cards';
import TableContainer, {Data} from "./TableContainer";
import Register from "../components/Register";
import { createClient, dedupExchange, fetchExchange, Provider } from "urql";
import { cacheExchange, Cache, QueryInput, query } from '@urql/exchange-graphcache';
import Login from "../components/Login";
import Header from "../components/Headers";
import ToggleMode from "../components/ToggleMode";
import { LoginMutation, MeDocument, MeQuery, RegisterMutation } from "../generated/graphql";
import ChangePassword from "../components/change-password/ChangePassword";
import ForgetPassword from "../components/change-password/ForgetPassword";

interface textFieldItemData {
     name: string;
     hintText: string;
     floatingLabelText: string;
     value: string;
}

export interface FormData {
    textFieldsData: textFieldItemData []
}

interface CardData {
    id: string;
    title: string;
    description: string;
    onNavigationHandler: (selectedBox: string) => void;
}

interface CardsData {
    cards: CardData [];
}

interface OperationExpenseViewProps {
    title: string;
}

interface OperationExpenseViewState {
    boxId: string;
    data: Data[];
}


class OperationExpenseView extends Component<OperationExpenseViewProps, OperationExpenseViewState> {
    cardsData: CardsData;
    formData: FormData;
    private chosen: any;
    theme: any;
    constructor(props) {
        super(props);
        this.state = {
            boxId: '',
            data: [],
        }

        this.cardsData = {
            cards: [
                {
                    id: 'login',
                    title: 'Login',
                    description: 'Login to take a look at your templates and save new ones.',
                    onNavigationHandler: this.loginNavigationHandler
                },

                {
                    id: 'register',
                    title: 'Register',
                    description: 'Use Template to save your self time and effort during the process.',
                    onNavigationHandler: this.registerNavigationHandler
                },

                {
                    id: 'abrechnung',
                    title: 'Neue Abrechnung',
                    description: '  if you don not have Template you can create one now.',
                    onNavigationHandler: this.createNavigationHandler
                },

                {
                    id: 'templates',
                    title: 'Templates',
                    description: 'to be able to save your ancillaries please register first!',
                    onNavigationHandler: this.templateNavigationHandler
                },
            ]
        },

        this.formData = {
            textFieldsData: [
                {
                    name: 'firstName',
                    hintText:'First name',
                    floatingLabelText: 'First name',
                    value: '',
                },
                {
                    name: 'lastName',
                    hintText:'Last Name',
                    floatingLabelText: 'Last Name',
                    value: '',
                },
                {
                    name: 'username',
                    hintText:'Username',
                    floatingLabelText: 'Username',
                    value: '',
                },
                {
                    name: 'email',
                    hintText:'Email',
                    floatingLabelText: 'Email',
                    value: '',
                },
                {
                    name: 'password',
                    hintText:'Password',
                    floatingLabelText: 'Password',
                    value: '',
                }
            ]
        },
        this.loginNavigationHandler.bind(this);
        this.registerNavigationHandler.bind(this);
        this.createNavigationHandler.bind(this);
        this.templateNavigationHandler.bind(this);
    }

    dotheme = () => {
      const th = createMuiTheme();
      console.log(th)
      return th;
    }

    loginNavigationHandler = (selectedBox: string): void => {
   
        this.setState(() => {
            return {
                boxId: selectedBox,
            };
        });
    }

    registerNavigationHandler = (selectedBox: string): void => {
       
        this.setState(() => {
            return {
                boxId: selectedBox,
            };
        });
    }

    createNavigationHandler = (selectedBox: string): void => {
    
        this.setState(() => {
            return {
                boxId: selectedBox,
            };
        });
    }

    templateNavigationHandler = (selectedBox: string): void => {
        this.chosen = <TableContainer/>
        this.setState(() => {
            return {
                boxId: selectedBox,
            };
        });
    }

    betterUpdateQuery<Result, Query>(
        cache: Cache,
        qi: QueryInput,
        result: any,
        fn: (r: Result, q: Query) => Query
    ){
       return cache.updateQuery(qi, (data) => fn(result, data as any) as any)
    }

    client = createClient({
        url: 'http://localhost:4000/graphql',
        fetchOptions: {
            credentials: "include",
        }, 
        exchanges:  // update cache query after mutation
        [dedupExchange,
             cacheExchange({
                 updates: {
                    Mutation: {
                        logout: (_result, args, cache, info) => { // return null for meQeury
                            this.betterUpdateQuery<LoginMutation, MeQuery>(
                                cache, 
                               {query: MeDocument},
                               _result,
                               () => ({ me: null })
                            )
                        },
                        
                        login: (_result, args, cache, info) => {
                           this.betterUpdateQuery<LoginMutation, MeQuery>(
                               cache, 
                               {query: MeDocument},
                               _result,
                               (result, query) => {
                                   if(result.login.errors) {
                                       return query
                                   } else {
                                       return {
                                        me: result.login.user,
                                       }  
                                   }
                               }

                            )
                        },
                         
                        register: (_result, args, cache, info) => {
                            this.betterUpdateQuery<RegisterMutation, MeQuery>(
                                cache, 
                                {query: MeDocument},
                                _result,
                                (result, query) => {
                                    if(result.register.errors) {
                                        return query
                                    } else {
                                        return {
                                         me: result.register.user,
                                        }  
                                    }
                                }
 
                             )
                         },
                      }
                 }
             }),
              fetchExchange],
    });
  // render={() => <ChangePassword token={""}/>}

    render() {
        return (
            <Provider value={this.client}>
            <MuiThemeProvider>
                <>
                <Header>
                <ToggleMode class={"Button"}>Toggle Mode </ToggleMode>
                </Header>
                <h1 className={"title"} style={{paddingBottom: '15px'}}>BKAS</h1>
                    <h1 className={"title"} style={{fontSize: '2rem'}}>
                        {this.props.title}
                    </h1>
                    <div className={"grid"}>
                        <Switch>
                            <Route path="/" exact render={() => <Cards cardsData={this.cardsData.cards}/>}/>
                            <Route path="/register" exact component={Register}/>
                            <Route path="/login" exact component={Login}/>
                            <Route path="/change-password"  component={ChangePassword}/> 
                            <Route path="/forgot-password"  component={ForgetPassword}/> 
                        </Switch> 
                    </div>
                </>
            </MuiThemeProvider>
            </Provider >

        );
    }
}

export default OperationExpenseView;
