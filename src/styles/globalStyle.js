import { createGlobalStyle } from 'styled-components';
import JosefinSlab from '../fonts/JosefinSlab-Regular.ttf';
import JosefinSlabBold from '../fonts/JosefinSlab-Bold.ttf';

export const GlobalStyle = createGlobalStyle`

  @font-face{
    font-family: "Josefin Slab";
    src: url(${JosefinSlab});
  }

  @font-face{
    font-family: "Josefin Slab";
    src: url(${JosefinSlabBold});
    font-style: bold;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body, html {
    font-family: "Josefin Slab", serif;
    width: 100%;
  }  

  select, textarea, input, button {
    font-family: inherit; 
    font-size: inherit;
  }
  
  a {
    text-decoration: none;
  }
`;
