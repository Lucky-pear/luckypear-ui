
import React from 'react';
import { ThemeProvider } from "emotion-theming";
import { theme } from "../styles/theme";

export const withTheme = (ComposedComponent: React.FC): React.FC => {
  return (props: React.HTMLAttributes<HTMLElement>) => {
    return (
      <ThemeProvider theme={theme}>
        <ComposedComponent {...props} />
      </ThemeProvider>
    );
  }
}
