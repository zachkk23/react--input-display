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
