import React from 'react';
import './Main.css';
import backgroundImg from '../background.png';
import AnimalList from '../AnimalList/AnimalList.js';

export default function Main({ animals }) {
  return (
    <div style={{ backgroundImage: `url(${backgroundImg})` }}>
      <AnimalList animals={animals}/>

    </div>
    
  );
  
}


