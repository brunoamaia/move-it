import styled from 'styled-components';

import theme from './theme';

const GlobalStyle = styled.div`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --background: #F2F3F5;
    --blue: #5965E0;
    --blue-dark: #4953B8;
    --blue-twitter: #2AA9E0;
    --gray-line: #DCFFE0;
    --green: #4CD62B;
    --red: #E83F5B;
    --text: #666;
    --text-highlight: #B3B9FF;
    --title: #2E384D;
    --white: #FFF;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--red);
    color: ${theme.text};
  }

  body,
  input,
  textarea,
  button {
    font: 400 16px "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inert;
    text-decoration:none;
  }

  .container {
    height: 100vh;
    max-width: 992px;
    margin: 0 auto;
    padding: 2.5rem 2rem;
    flex-direction: column;
  }

`;

export default GlobalStyle;
