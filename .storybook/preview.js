import React from 'react';
import { GlobalStyle } from "../src/styles/globalStyle";

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
