 import React,{useState} from "react"
import "./App.css"
export default function App() {
  const [inputVal, setInputVal] = useState("")
  const [output, setOutput] = useState("")
   
  const handleInputChange =(event) => {
    setInputVal(event.target.value)

  }
    const handleButtonClick = () => {
   if(inputVal === ""){
    setOutput("Enter a valid location")
   }else {
    setOutput(inputVal)
    }};
  return (
    <div className="App">
      <p className="weatherTitle">Weather App</p>
      <input 
      type="text" 
      value={inputVal} 
      placeholder="Location"  
      onChange={handleInputChange}
      />
      <button type="submit" className="buttonEl" onClick={handleButtonClick}>CheckLocation
      </button>
        <p>{output}</p>     
    </div>
  );
} 

/* import React, { useState } from 'react';
import axios from 'axios';

export default function RecipeFinder (){
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/recipes/v2?type=any&beta=true&q=${encodeURIComponent(ingredients)}&app_id=f9a79cfa&app_key=46ac9ba4ecb62daea8f257011d0da017&diet=high-fiber&health=alcohol-cocktail&imageSize=THUMBNAIL`);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients..."
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h3>{recipe.recipe.label}</h3>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>Ingredients: {recipe.recipe.ingredientLines.join(', ')}</p>
            <p>Calories: {recipe.recipe.calories.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; */





 

