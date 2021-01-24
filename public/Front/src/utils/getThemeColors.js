"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHoverColor = exports.getTextColor = exports.getBorderColor = exports.getChildrenBackground = exports.getFromColor = exports.getForeground = exports.getBackground = void 0;
var styled_theming_1 = __importDefault(require("styled-theming"));
// change style  based on dark/light mode
exports.getBackground = styled_theming_1.default('mode', {
    light: '#e1e1e1',
    dark: '#262626'
});
exports.getForeground = styled_theming_1.default('mode', {
    light: '#1f1f1f',
    dark: '#EEE'
});
exports.getFromColor = styled_theming_1.default.variants('mode', 'variant', {
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
exports.getChildrenBackground = styled_theming_1.default.variants('mode', 'variant', {
    normal: {
        light: '#ffffff',
        dark: '#111'
    },
    primary: {
        light: '#EEE',
        dark: '#1d1d1d'
    }
});
exports.getBorderColor = styled_theming_1.default.variants('mode', 'variant', {
    normal: {
        light: '#EEE',
        dark: '#111'
    },
    primary: {
        light: '#03dac6',
        dark: '#1d1d1d'
    }
});
exports.getTextColor = styled_theming_1.default.variants('mode', 'variant', {
    normal: {
        light: '#1d1d1d',
        dark: 'white'
    },
    primary: {
        light: '#1d1d1d',
        dark: '#c38fff'
    }
});
exports.getHoverColor = styled_theming_1.default.variants('mode', 'variant', {
    normal: {
        light: '#EEE',
        dark: '#c38fff'
    },
    primary: {
        light: '#c38fff',
        dark: '#03dac6'
    }
});
//# sourceMappingURL=getThemeColors.js.map