import { getTextColor, getChildrenBackground, getHoverColor, getBorderColor } from '../utils/getThemeColors';
import styled, {css} from 'styled-components';
import style from 'styled-theming';


const Button = styled.button`
   background-color: ${getChildrenBackground};
   border: ${getBorderColor};
   color: ${getTextColor};
    &:hover {
       background-color: ${getHoverColor};
       border: ${getHoverColor};
       color: #1d1d1d;
    }
`

export const Card = styled.div`
             background-color: ${getChildrenBackground};
            margin: 1rem;
            flex-basis: 45%;
            padding: 1rem;
            text-align: left;
            color: ${getTextColor};
            text-decoration: none;
            border: 1px solid black;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            &:hover {
            background-color: ${getHoverColor};
            color: #1d1d1d;;
          }
             
`

//width: 50%

export const Form = styled.form`
            background-color: ${getChildrenBackground};
            padding: 30px;
            color: ${getTextColor};
            text-decoration: none;
            border: 1px solid black;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            p: {
               color: white;
            }
                 
`

export default Button;

