import { createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 13px;
    @media(min-width: 768px) {
      font-size: 16px;
    }
  }
  body {
    margin: 0;
    min-height: 100vh;
    font-weight: 700;
    height: 100vh;
    background: #1e213f;
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      margin-right: 16px;
      -webkit-appearance: none;
      background: url("data:image/svg+xml,%3Csvg width='14' height='21' viewBox='0 0 14 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 6L7 2L13 6' stroke='%231E213F' stroke-opacity='0.25' stroke-width='2'/%3E%3Cpath d='M1 15L7 19L13 15' stroke='%231E213F' stroke-opacity='0.25' stroke-width='2'/%3E%3C/svg%3E%0A")
        no-repeat center center;
      height: 21px;
      width: 14px;
      opacity: 0.5; /* shows Spin Buttons per default (Chrome >= 39) */
      cursor: pointer;
    }

    input[type="number"]::-webkit-inner-spin-button:hover,
    input[type="number"]::-webkit-inner-spin-button:active {
      opacity: 1;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
  }
  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
  }
`;

export default GlobalStyles;