import React from "react";
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import style from 'styled-theming';

import OperationExpenseView from "./containers/OperationExpenseView";
import useTheme from "./useTheme";
import './style.less';
import {BrowserRouter} from 'react-router-dom';
import { getBackground, getForeground, getFromColor } from "./utils/getThemeColors";


// change style of App based on this fct  
// props => props.theme.mode === 'dark' ? '#EEE' : '#111'
const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${getBackground};
      color: ${getForeground};
      .text {
        color: '#EEE';
      }
      .login {
         background-color:${getFromColor};
         }
    }
       
    `


function App() {
    const theme = useTheme();
    return (
    
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <div className={"container"}>
                    <OperationExpenseView title={"Betriebskostenabrechnngssystem"}/>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
