import './AnimalList.css';
import React from 'react';
 


export default function AnimaList({ animals }) {
  return (<div className='animal-list'>

    {animals.map((animal, i) => <div key={animal.name + i}>{animal.name}</div>)}
  </div>
  );
}

