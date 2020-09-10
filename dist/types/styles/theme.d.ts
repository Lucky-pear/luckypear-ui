import { CreateStyled } from '@emotion/styled';
export declare const theme: {
    color: {
        primary: string;
        secondary: string;
        darkGrey: string;
        grey: string;
        lightGrey: string;
        alert: string;
        white: string;
        transparent: string;
    };
    size: {
        small: string;
        medium: string;
        big: string;
        large: string;
        huge: string;
    };
    shadow: {
        box: string;
    };
    font: {
        roboto: string;
        axis: string;
        quicksand: string;
    };
};
export declare type SizeType = keyof typeof theme.size;
export declare type ColorType = keyof typeof theme.color;
export declare type FontType = keyof typeof theme.font;
export declare type ThemeType = typeof theme;
declare const _default: CreateStyled<{
    color: {
        primary: string;
        secondary: string;
        darkGrey: string;
        grey: string;
        lightGrey: string;
        alert: string;
        white: string;
        transparent: string;
    };
    size: {
        small: string;
        medium: string;
        big: string;
        large: string;
        huge: string;
    };
    shadow: {
        box: string;
    };
    font: {
        roboto: string;
        axis: string;
        quicksand: string;
    };
}>;
export default _default;
