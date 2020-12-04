import React from "react";
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import style from 'styled-theming';

import OperationExpenseView from "./containers/OperationExpenseView";
import useTheme from "./useTheme";
import './style.less';
import {BrowserRouter, Route} from 'react-router-dom';


// change style  based on dark/light mode
const getBackground = style('mode', {
    light: '#e1e1e1',
    dark: '#262626'
})

const getForeground = style('mode', {
    light: '#1f1f1f',
    dark: '#EEE'
})


const getFromColor: any = style.variants('mode', 'variant', {
    normal: {
        light: '#EEE',
        dark: '#111'
    },
    primary: {
        light: '#EEE',
        dark: '#1d1d1d'
    }
});

// we can change style of App based on this fct  // props => props.theme.mode === 'dark' ? '#EEE' : '#111'
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
