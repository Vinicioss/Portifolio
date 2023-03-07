import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

    ::-webkit-scrollbar {
      width: .6rem;
      border-radius: .5rem;
      background-color: ${({ theme }) => theme.colors.backgroundLight};
  }
  ::-webkit-scrollbar-thumb {
      width: .6rem;
      border-radius: .5rem;
      background-color: ${({ theme }) => theme.colors.secondary};
  }
  ::-webkit-scrollbar-thumb:hover {
      width: .6rem;
      border-radius: .5rem;
      background-color: ${({ theme }) => theme.colors.primary};
  }

    scrollbar-color: ${({ theme }) => theme.colors.secondary} ${({ theme }) => theme.colors.backgroundLight} !important;
    scrollbar-width: thin !important;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 1rem Inter, sans-serif;
  }
  body {
    background: ${props => props.theme.colors.background};
    font: 400 1rem 'Montserrat', sans-serif;
    min-height: 100vh;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;
    @media(max-width:1450px) {
      max-width: 70rem;
    }
    @media(max-width:1000px) {
      max-width: 50rem;
    }
    @media(max-width:700px) {
      padding: 0 2rem;
    }
  }

`;
