import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles/globalStyle';
import NavBar from './components/navbar/NavBar';
import Banner from './sections/banner/Banner';
import About from './sections/about/About';
import Gallery from './sections/gallery/Gallery';

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: black;
  flex-direction: column;
`;

function App() {
  return (
    <div className="App">
      <AppContainer>
        <GlobalStyle/>
        <header>
          <NavBar/>
        </header>
        <main>
          <Banner/>
          <About/>
          <Gallery/>
        </main>
      </AppContainer>
    </div>
  );
}

export default App;
