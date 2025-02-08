import { useState } from 'react'
import './App.css'

function App() {
  const [result,setResult] = useState(0);
  const [firstNum,setFirstNum] =useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [operator, setOperator] =useState(null);
  const [numArr, setNumArr] =useState([]);

  const clear = () => {
    setResult(0);
    setFirstNum(0);
    setSecondNum(0);
    setOperator(null)
    setNumArr([]);
  }


  const setNumber = (num) => {
    if(operator==null) {
      if(numArr.length<5) {
        const updatedNum = [...numArr, num];
        setNumArr(updatedNum);
        let first = updatedNum.join('');
        const updatedFirstNum = Number(first);
        setFirstNum(updatedFirstNum);
        setResult(updatedFirstNum);
      }
    } else {
      if(numArr.length<5) {
        const updatedNum = [...numArr,num];
        setNumArr(updatedNum);
        let second = updatedNum.join('');
        const updatedSecondNum = Number(second);
        setSecondNum(updatedSecondNum);
        setResult(updatedSecondNum);
      }
    }
  }

  const handleOpClick = (operator) => {
    if(firstNum!==null) {
      setOperator(operator);
      setNumArr([]);
      setResult(0);
    }
  }

  const calculate = () => {
    if(operator==="+") {
      let res = firstNum+secondNum;
      setResult(res);
      setFirstNum(res);
      setNumArr([]);
      setSecondNum(0);
      setOperator(null);
    } else if (operator ==="-") {
      let res = firstNum-secondNum;
      setResult(res);
      setFirstNum(res);
      setNumArr([]);
      setSecondNum(0);
      setOperator(null);
    }
  }

  return (
    <>
      <div id = "results">{result}</div>

      <div id="btnContainer">
        <div className="btn lGrey" onClick={clear}>AC</div>
        <div className="btn lGrey" onClick={()=> setResult((prev)=>prev*-1)}>+/-</div>
        <div className="btn lGrey" onClick={()=>handleOpClick("%")}>%</div>
        <div className="btn orange" onClick={()=>handleOpClick("/")}>/</div>
        <div className="btn dGrey" onClick = {()=> setNumber(7)}>7</div>
        <div className="btn dGrey" onClick = {()=> setNumber(8)}>8</div>
        <div className="btn dGrey" onClick = {()=> setNumber(9)}>9</div>
        <div className="btn orange" onClick={()=>handleOpClick("x")}>x</div>
        <div className="btn dGrey" onClick = {()=> setNumber(4)}>4</div>
        <div className="btn dGrey" onClick = {()=> setNumber(5)}>5</div>
        <div className="btn dGrey" onClick = {()=> setNumber(6)}>6</div>
        <div className="btn orange" onClick={()=>handleOpClick("-")}>-</div>
        <div className="btn dGrey" onClick = {()=> setNumber(1)}>1</div>
        <div className="btn dGrey" onClick = {()=> setNumber(2)}>2</div>
        <div className="btn dGrey" onClick = {()=> setNumber(3)}>3</div>
        <div className="btn orange" onClick={()=>handleOpClick("+")} >+</div>
        <div className="btn dGrey">⌫</div>
        <div className="btn dGrey" onClick = {()=> setNumber(0)}>0</div>
        <div className="btn dGrey">.</div>
        <div className="btn orange" onClick={calculate}>=</div>
      </div>
    </>
  )
}

export default App
