import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    align-items: center;
    display: flex;
    font-family: "Millerbanner";
    min-height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;

    
  }
`;

//color: ${({ theme }) => theme.primaryLight};
