import React from 'react';
import './Main.css';
import FarmAnimals from '../FarmAnimals/FarmAnimals';
import backgroundImg from '../background.png';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>

      {animals.map((animals, i) => <FarmAnimals {...animals} key={animals.name + i} />
      )}

    </main>
  );

}