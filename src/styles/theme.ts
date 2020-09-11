import styled, { CreateStyled } from '@emotion/styled'

export const theme = {
  color: {
    primary: '#3bb2b8',
    secondary: '#38CFAC',
    
    darkGrey: "#2d2c2c",
    grey: "#C0C0C0",
    lightGrey: "#fafafa",
  
    alert: '#e02020',
    
    white: '#ffffff',
    transparent: 'transparent',
  },
  size: {
    tiny: '12px',
    small: '16px',
    medium: '20px',
    big: '24px',
    large: '32px',
    huge: '48px',
  },
  shadow: {
    box: 'rgba(0, 0, 0, 0.08) 0px 1px 12px',
    hover: 'rgba(0, 0, 0, 0.1) 0px 0px 20px',
  },
  font: {
    roboto: 'Roboto',
    axis: 'Axis',
    quicksand: 'Quicksand'
  }
}

export type SizeType = keyof typeof theme.size;
export type ColorType = keyof typeof theme.color;
export type FontType = keyof typeof theme.font;
export type ThemeType = typeof theme;
export default styled as CreateStyled<ThemeType>;