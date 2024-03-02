import React from "react"
import { useState } from "react";
import './App.css';
import Images from "./Access/Model-noxious.jpg"
function App() {
  const [counter, setCounter] = useState(0);
  const [firstnumber, setfirstnumber] = useState(0);
  const [seconnumber, setSeconnumber] = useState(0);
  const [sigs, setsigs] = useState('');
  const [result, setresult] = useState(0)
  const handleInCountercrement = () =>{
    const incounter = counter + 1;
    setCounter(incounter)
  }
  const handleDeCountercremant = () =>{
    const incounter = counter - 1;
    setCounter(incounter)
  }

  const handlePressnumber = (number) =>{
    if(!firstnumber){
      setfirstnumber(number)
    }else{
      setSeconnumber(number)
    }
  }

  const handlePresssigs = (sigs) =>{
    setsigs(sigs)
  }

  const handleCalculater = () => {
    if(sigs === '+'){
      const result = (+firstnumber) + (+seconnumber);
      setresult(result)
    }else if(sigs === '-'){
      const sub = (+firstnumber) - (+seconnumber);
      setresult(sub)
    }
  }
  const handleResetCalculater = () => {
    setfirstnumber(0);
    setSeconnumber(0);
    setsigs('');
    setresult(0);
  }
  return (
    <React.Fragment>
      <div className="counter">
        <h1>Counter:{counter}</h1>
        <button onClick={handleInCountercrement}>InCounter (+1)</button>
        <button onClick={handleDeCountercremant}>DeCounter (-1)</button>
      </div>
      <div className="calculater">
        <button onClick={() => handlePressnumber(1)}>1</button>
        <button onClick={() => handlePressnumber(2)}>2</button>
        <button onClick={() => handlePressnumber(3)}>3</button>
        <button onClick={() => handlePressnumber(4)}>4</button>
        <button onClick={() => handlePressnumber(5)}>5</button>
        <button onClick={() => handlePressnumber(6)}>6</button>
        <button onClick={() => handlePressnumber(7)}>7</button>
        <button onClick={() => handlePressnumber(8)}>8</button>
        <button onClick={() => handlePressnumber(9)}>9</button>
        <button onClick={() => handlePresssigs('+')}>+</button>
        <button onClick={() => handlePresssigs('-')}>-</button>
        <button onClick={handleCalculater}>=</button>
        <button onClick={handleResetCalculater}>reset</button>
        <h1>Số thứ nhất : {firstnumber}</h1>
        <h1>Số thứ hai:{seconnumber}</h1>
        <h1>Dấu: {sigs}</h1>
        <h1>Kết quả: {result}</h1>
      </div>
      <div className="images">
        <img src={Images} alt="anh loi"/>
      </div>
    </React.Fragment>
  );
}

export default App;
