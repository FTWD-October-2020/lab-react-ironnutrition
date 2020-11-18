import React, { useState } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodBox from './FoodBox'

function App() {
  let [newFoodForm, setNewFoodForm] = useState(false);
  let [name, setName] = useState('');
  let [calories, setCalories] = useState('');
  let [image, setImage] = useState('');
  let [allFoods, setAllFoods] = useState(foods)

  const FoodBoxes = (food) => {
    return allFoods.map(eachFood => {
      return <FoodBox {...eachFood} />
    })

  }

  const showFoodForm = () => {
    setNewFoodForm(!newFoodForm)
  }

  const addNewFood = () => {
    let newFood = {
      name, calories, image
    }

    setAllFoods([newFood, ...allFoods])
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleCaloriesChange = (event) => {
    setCalories(event.target.value)
  }

  const handleImageChange = (event) => {
    setImage(event.target.value)
  }

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <button onClick={showFoodForm}>Add New Food</button>
      {newFoodForm ?
        <div>
          <input onChange={handleNameChange} type="text" placeholder="Name"></input>
          <input onChange={handleCaloriesChange} type="text" placeholder="Calories"></input>
          <input onChange={handleImageChange} type="text" placeholder="Image URL"></input>
          <button onClick={addNewFood}>Submit</button>
        </div> : null}
      <FoodBoxes />
    </div>

  )
}

export default App;


