import React from 'react';
import Home from './view/Home'
import NavBar from './components/nav-bar'
import Footer from './components/footer'

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;