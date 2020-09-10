
import React from 'react';
import { ThemeProvider } from "emotion-theming";
import { theme } from "../styles/theme";

export const withTheme = <T extends object>(ComposedComponent: React.FC<T>) => {
  return (props: T) => {
    return (
      <ThemeProvider theme={theme}>
        <ComposedComponent {...props} />
      </ThemeProvider>
    );
  }
}
