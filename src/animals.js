import React from 'react';
import AnimalList from './AnimalList/AnimalList';

export default function animals({ animals }) {
    return (

        {animals.map((animals, i) =><AnimalList {...animals} key={animals.name + i}/>
        )}
    );
}