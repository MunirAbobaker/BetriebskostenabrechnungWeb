import styled, {css} from 'styled-components';
import style from 'styled-theming';

const getBackground = style.variants('mode', 'variant', {
    normal: {
        light: '#ffffff',
        dark: '#111'
    },
    primary: {
        light: '#EEE',
        dark: '#1d1d1d'
    }
});


const getBorderColor= style.variants('mode', 'variant', {
    normal: {
        light: '#EEE',
        dark: '#111'
    },
    primary: {
        light: '#03dac6',
        dark: '#1d1d1d'
    }
});

const getTextColor= style.variants('mode', 'variant', {
    normal: {
        light: '#EEE',
        dark: '#c38fff'
    },
    primary: {
        light: '#1d1d1d',
        dark: '#c38fff'
    }
});

const getHoverColor= style.variants('mode', 'variant', {
    normal: {
        light: '#EEE',
        dark: '#c38fff'
    },
    primary: {
        light: '#c38fff',
        dark: '#03dac6'
    }
});


const Button = styled.button`
   background-color: ${getBackground};
   border: ${getBorderColor};
   color: ${getTextColor};
    &:hover {
       background-color: ${getHoverColor};
       border: ${getHoverColor};
       color: #1d1d1d;
    }
`

export const Card = styled.div`
             background-color: ${getBackground};
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

export default Button;

