import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  --green: #1e9732;
  --background: #F7FAFC;
  --white: #fff;
  --back-login: #2F855A;
  --back-button:#42ec9a;
  --back-content:#9ae6b4;
  --text-input: #969CB3;
  --button-sidebar: #1C4532;
  --button-sidebar2: #276749;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins;
}

html{
  @media (max-width: 1080px){
    font-size: 93.75%; /*15px*/
  }

  @media (max-width: 720px){
    font-size: 87.5%; /*14px*/
  }
}


body{
  background: var(--background);
  -webkit-font-smoothing:antialiased;
}

button{
  cursor: pointer;
}

[disabled]{
  opacity: 0.4;
  cursor: not-allowed;
}

`;
