// import logo from './logo.svg';
import React from 'react';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import { animals } from './data.js';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main animals={animals}/>
      <Footer />
    </div>

  );
}

export default App;
