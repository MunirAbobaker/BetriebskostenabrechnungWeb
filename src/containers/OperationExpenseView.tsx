import * as React from "react";
import { Route, Switch} from 'react-router-dom';
import {MuiThemeProvider} from "material-ui/styles/";

/* import Form from '../components/Form/Form'; */
import Cards from './Cards/Cards';
import TableContainer, {Data} from "./TableContainer";
import Register from "../components/Register";
import Login from "../components/Login";
import Header from "../components/Headers";
import ToggleMode from "../components/ToggleMode";
import ChangePassword from "../components/change-password/ChangePassword";
import ForgetPassword from "../components/change-password/ForgetPassword";
import {FORM_DATA, CARDS_DATA} from '../utils/constants';
import Form from "../components/Form/Form";
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

const OperationExpenseView: React.FC<OperationExpenseViewProps> = ({...props}) => {
   
    const cardsData: CardsData = CARDS_DATA
    const formData: FormData = FORM_DATA;
    const [username, setUsername] = React.useState('');
    const [{data, fetching}] = useMeQuery();
    
    const getUser = () => {
                // must been under provider client to work  useQuery
         // data is loading
    if(fetching) {
       
        // user not logged in
    } else if (!data?.me) {
           return null;
        // user logged in
    } else {
     // props.onLoggedInHandler(data.me.username);
          return data.me.username       
 
      }
    }
     
  
        return ( //style={{display: 'flex', flexDirection: 'column'}} className={"grid"} style={{ flex: '0 1 100%'}}
            <MuiThemeProvider>
                <div >
                        <Header userLoggedin={getUser()}>
                        <ToggleMode class={"Button"}>Toggle Mode </ToggleMode>
                        </Header>
                        <div style={{display: "flex", flexDirection: "column"}}>
                           <h1 className={"title"}>BKAS</h1>
                            <h1 className={"title"} style={{fontSize: '2rem'}}>
                                {props.title}
                            </h1>
                        </div>
                       

                            <div className={"grid"}>
                                <Switch>
                                    <Route path="/" exact render={() => <Cards cardsData={cardsData.cards} userLoggedIn={getUser()}/>}/>
                                    <Route path="/register" exact component={Register}/>
                                    <Route path="/login" exact component={Login}/>
                                    <Route path="/change-password"  component={ChangePassword}/> 
                                    <Route path="/forgot-password"  component={ForgetPassword}/> 
                                    <Route path="/create" exact component={Form}/>
                                    <Route path="/templates" exact component={TableContainer}/>
                                   {/*  <Route path="/display" exact render={() => <TableContainer/>}/> */}
                                    <Route path="/display" exact  component={TableContainer}/>
                                </Switch> 
                            </div>
                    </div>
            </MuiThemeProvider>

        );
}

export default OperationExpenseView;
