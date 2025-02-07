import { useState } from 'react'
import './App.css'

function App() {
  const [result,setResult] = useState(0);
  const [firstNum,setFirstNum] =useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [operator, setOperator] =useState(null);
  const [numArr, setNumArr] =useState([])


  const setNumber = (num) => {
    if(operator==null) {
      if(numArr.length<5) {
        const updatedNum = [...numArr, num];
        setNumArr(updatedNum);
        let first = "";
        for(const number of updatedNum) {
          first+=number;
        }
        const updatedFirstNum = Number(first);
        setFirstNum(updatedFirstNum);
        setResult(updatedFirstNum);
      }
    }
  }

  return (
    <>
      <div id = "results">{result}</div>

      <div id="btnContainer">
        <div className="btn lGrey">AC</div>
        <div className="btn lGrey">+/-</div>
        <div className="btn lGrey">%</div>
        <div className="btn orange">/</div>
        <div className="btn dGrey" onClick = {()=> setNumber(7)}>7</div>
        <div className="btn dGrey" onClick = {()=> setNumber(8)}>8</div>
        <div className="btn dGrey" onClick = {()=> setNumber(9)}>9</div>
        <div className="btn orange">x</div>
        <div className="btn dGrey" onClick = {()=> setNumber(4)}>4</div>
        <div className="btn dGrey" onClick = {()=> setNumber(5)}>5</div>
        <div className="btn dGrey" onClick = {()=> setNumber(6)}>6</div>
        <div className="btn orange">-</div>
        <div className="btn dGrey" onClick = {()=> setNumber(1)}>1</div>
        <div className="btn dGrey" onClick = {()=> setNumber(2)}>2</div>
        <div className="btn dGrey" onClick = {()=> setNumber(3)}>3</div>
        <div className="btn orange">+</div>
        <div className="btn dGrey">⌫</div>
        <div className="btn dGrey">0</div>
        <div className="btn dGrey">.</div>
        <div className="btn orange">=</div>
      </div>
    </>
  )
}

export default App
