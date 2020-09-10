/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import Axis from "../assets/fonts/Axis_Extrabold.otf";

export const GlobalStyle = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

      @font-face {
        font-family: 'Axis';
        src:url(${Axis}) format('opentype');
      }

      * {
        font-family: 'Roboto';
        font-size:16px;
        font-weight: 400;
        
        box-sizing: border-box;
      }
    
      textarea, input { 
        border: none;
        outline: none; 
        resize: none;
      }
      input:-webkit-autofill,
      input:-webkit-autofill:hover, 
      input:-webkit-autofill:focus, 
      input:-webkit-autofill:active  {
        transition: background-color 5000s ease-in-out 0s;
      }
    
      a {
        text-decoration: none;
      }
    `}
  />
);