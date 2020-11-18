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
  let [showFoods, setShowFoods] = useState(foods)

  const FoodBoxes = (food) => {
    return showFoods.map(eachFood => {
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

    setShowFoods([newFood, ...showFoods])
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

  const searchFood = (event) => {
    console.log(event.target.value);
    let filteredFoods = allFoods.filter((eachFood) => {
      return eachFood.name.toUpperCase().includes(event.target.value.toUpperCase())
    })
    setShowFoods(filteredFoods);
  }

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <form>
        <input onChange={searchFood} type="text" placeholder="Search Here" />
      </form>
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


