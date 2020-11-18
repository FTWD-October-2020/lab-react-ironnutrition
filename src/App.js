import React from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodBox from './FoodBox'

function App() {
  const FoodBoxes = (food) => {
    return foods.map(eachFood => {
      return <FoodBox {...eachFood} />
    })

  }


  return (
    <FoodBoxes />
  )
}

export default App;


