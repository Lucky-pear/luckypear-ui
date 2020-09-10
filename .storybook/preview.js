import React from "react";
import { GlobalStyle } from "../src/styles/globalStyle";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../src/styles/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
