import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  ${reset}
  * {
      box-sizing: border-box;
    }
  body{
      margin: 0;
      padding: 0;
      }
`;

export default GlobalStyle;