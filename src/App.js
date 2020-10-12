import React, { useContext } from 'react';
// import { FruitContext, fruitContext } from './index';
import { useFruits } from './fruit-hooks';
import './App.css';

const App = () => {
  // const { fruits } = useContext(FruitContext);
  const { fruits, addFruit, removeFruit } = useFruits();

  return (
    <>
      <h1>Fruits</h1>
      <div>
        <button onClick={() => addFruit(`Fruit ${fruits.length + 1}`)}>
          Add
              </button>
      </div>
      <ul>
        {fruits.map((fruit, i) => (
          <li key={i} onClick={() => removeFruit(fruit)}>
            {fruit}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App;
