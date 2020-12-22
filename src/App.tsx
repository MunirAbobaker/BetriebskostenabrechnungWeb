import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import style from "styled-theming";
import { client } from "./utils/createUrqlClient";
import { Provider } from "urql";

import OperationExpenseView from "./containers/OperationExpenseView";
import useTheme from "./useTheme";
import "./style.less";
import { BrowserRouter } from "react-router-dom";
import {
  getBackground,
  getForeground,
  getFromColor,
} from "./utils/getThemeColors";

// shift + alt + f => pretty printer
// change style of App based on this fct
// props => props.theme.mode === 'dark' ? '#EEE' : '#111'

/* .login {
  background-color:${getFromColor};
} */
const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${getBackground};
      color: ${getForeground};
      .text {
        color: '#EEE';
      }
      .InputElement:placeholder { 
        color: #e1e1e1;
        opacity: 1; 
      }
    }
       
    `;

const App = () => {
  const theme = useTheme();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider value={client}>
          <div className={"container"}>
            <OperationExpenseView title={"Betriebskostenabrechnngssystem"} />
          </div>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
