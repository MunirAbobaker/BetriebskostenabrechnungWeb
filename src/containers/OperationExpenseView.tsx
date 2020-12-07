import * as React from "react";
import { Route, Switch} from 'react-router-dom';
import {MuiThemeProvider} from "material-ui/styles/";
import { useQuery } from 'urql';

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
import {FORM_DATA, CARDS_DATA} from '../utils/constants';
import {  useMeQuery } from "../generated/graphql";

interface textFieldItemData {
     name: string;
     hintText: string;
     floatingLabelText: string;
     value: string;
}

export interface FormData {
    textFieldsData: textFieldItemData [];
}

interface CardData {
    id: string;
    title: string;
    description: string;

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



const OperationExpenseView:  React.FC<OperationExpenseViewProps> = (props: React.PropsWithChildren<OperationExpenseViewProps>) => {
   
    const cardsData: CardsData = CARDS_DATA
    const formData: FormData = FORM_DATA;
    const [username, setUsername] = React.useState('');

    const meQuery  = `
    query  {
        me {
      
        username
        }
      }
    `;
   
    /* React.useEffect(() => {
        
        const [result, reexecuteQuery] = useQuery({
            query: meQuery,
        });
        const { data, fetching, error } = result;
        console.log( data, fetching, error)
        return data.me.username;
 
        // data is loading
        if(fetching) {
            console.log(fetching)
           // user not logged in
       } else if (!data?.me) {
               console.log("no data ")
           // user logged in
       } else {
          
           setUsername(data.me.username);
            console.log(data.me.username)
            return data.me.username
       }
      }, [])
 */
  
   function betterUpdateQuery<Result, Query>(
        cache: Cache,
        qi: QueryInput,
        result: any,
        fn: (r: Result, q: Query) => Query
    ){
       return cache.updateQuery(qi, (data) => fn(result, data as any) as any)
    }

    const client = createClient({
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
                              betterUpdateQuery<LoginMutation, MeQuery>(
                                cache, 
                               {query: MeDocument},
                               _result,
                               () => ({ me: null })
                            )
                        },
                        
                        login: (_result, args, cache, info) => {
                               betterUpdateQuery<LoginMutation, MeQuery>(
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
                               betterUpdateQuery<RegisterMutation, MeQuery>(
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
    const fetchUser = () => {

     /*    const [result, reexecuteQuery] = useQuery({
            query: meQuery,
        });
        const { data, fetching, error } = result;
        console.log( data, fetching, error)
        return data.me.username; */
      /* 
        const [{data, fetching}] = useMeQuery();
 
        // data is loading
        if(fetching) {
            console.log(fetching)
           // user not logged in
       } else if (!data?.me) {
               console.log("no data ")
           // user logged in
       } else {
          
           setUsername(data.me.username);
            console.log(data.me.username)
            return data.me.username
       } */
    }
 
        return (
            <Provider value={client}> {/** client for graphql */}
             {/** ! for materila ui components */}
            <MuiThemeProvider>
            <>
                <Header>
                <ToggleMode class={"Button"}>Toggle Mode </ToggleMode>
                </Header>
                <h1 className={"title"}>BKAS</h1>
                    <h1 className={"title"} style={{fontSize: '2rem'}}>
                        {props.title}
                    </h1>

                    <div className={"grid"}>
                        <Switch>
                            <Route path="/" exact render={() => <Cards cardsData={cardsData.cards}/>}/>
                            <Route path="/register" exact component={Register}/>
                            <Route path="/login" exact component={Login}/>
                            <Route path="/change-password"  component={ChangePassword}/> 
                            <Route path="/forgot-password"  component={ForgetPassword}/> 
                            <Route path="/create" exact render={() => <h1> you can create Abrechnung </h1>}/>
                            <Route path="/templates" exact render={() => <TableContainer/>}/>
                        </Switch> 
                    </div>
                    </>
            </MuiThemeProvider>
            </Provider >

        );
}

export default OperationExpenseView;
