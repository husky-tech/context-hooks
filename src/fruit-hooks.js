import React, { createContext, useContext, useState } from 'react';
import { fruitData } from './fruit-data';

const FruitContext = createContext();

export const FruitProvider = ({ children }) => {
    const [fruits, setFruits] = useState(fruitData);
    const addFruit = (newFruits) => setFruits([...fruits, newFruits]);
    const removeFruit = (s) => setFruits(fruits.filter((fruit) => fruit !== s));
    return (
        <FruitContext.Provider value={{ fruits, addFruit, removeFruit }}>
            {children}
        </FruitContext.Provider>
    )
}

export const useFruits = () => useContext(FruitContext);
