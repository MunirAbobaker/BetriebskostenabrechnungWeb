import style from 'styled-theming';

// change style  based on dark/light mode
export const getBackground = style('mode', {
    light: '#e1e1e1',
    dark: '#262626'
});
export const getForeground = style('mode', {
    light: '#1f1f1f',
    dark: '#EEE'
});

export const getFromColor: any = style.variants('mode', 'variant', {
    normal: {
        light: '#EEE',
        dark: '#111'
    },
    primary: {
        light: '#EEE',
        dark: '#1d1d1d'
    }
});

// for button and cards 

export const getChildrenBackground = style.variants('mode', 'variant', {
    normal: {
        light: '#ffffff',
        dark: '#111'
    },
    primary: {
        light: '#EEE',
        dark: '#1d1d1d'
    }
});



export const getBorderColor= style.variants('mode', 'variant', {
    normal: {
        light: '#EEE',
        dark: '#111'
    },
    primary: {
        light: '#03dac6',
        dark: '#1d1d1d'
    }
});

export const getTextColor= style.variants('mode', 'variant', {
    normal: {
        light: '#1d1d1d',
        dark: 'white'
    },
    primary: {
        light: '#1d1d1d',
        dark: '#c38fff'
    }
});

export const getHoverColor= style.variants('mode', 'variant', {
    normal: {
        light: '#EEE',
        dark: '#c38fff'
    },
    primary: {
        light: '#c38fff',
        dark: '#03dac6'
    }
});

