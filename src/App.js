import { useState } from 'react';
import { BsBackspace } from "react-icons/bs";

import './App.css';

function App() {

  const [result,setResut] = useState("")

  const handleClick = (e) =>{
    setResut(result.concat(e.target.name))
  }
  const clear = () => {
    setResut("")
  }
  const backSpace = () => {
    setResut(result.slice(0, result.length - 1))
  }
  const calculate = () => {
    try{
      setResut(eval(result).toString())
    } catch(err) {
      setResut("Error")
    }
    
  }
  return (
    <div className="container">
      <h1>Hai , ini adalah calcuator</h1>
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <button onClick={clear} id="clear">Clear</button>
        <button className="color" onClick={backSpace} id="backspace"><BsBackspace/></button>
        <button className="color" name="/" onClick={handleClick}>&divide;</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button className="color" name="*" onClick={handleClick}>&times;</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button className="color" name="-" onClick={handleClick}>&ndash;</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button className="color" name="+" onClick={handleClick}>+</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button onClick={calculate} id="result">=</button>
      </div>
    </div>
  );
}

export default App;
