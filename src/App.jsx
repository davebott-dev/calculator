import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("0");
  const [operation, setOperation] =useState(null)
  const [firstNum, setFirstNum] = useState(null);
  const [secondNum, setSecondNum] = useState(null);
  const [operator, setOperator] = useState(null);
  const [numArr, setNumArr] = useState([]);

  const clear = () => {
    setResult("0");
    setFirstNum(null);
    setSecondNum(null);
    setOperator(null);
    setOperation(null);
    setNumArr([]);
  };

  const setNumber = (num) => {
    if (operator == null) {
      if (numArr.length < 5) {
        if (num === "." && numArr.includes(".")) return;
        const updatedNum = [...numArr, num];
        setNumArr(updatedNum);
        let first = updatedNum.join("");
        setFirstNum(Number(first));
        setResult(first); 
      }
    } else {
      if (numArr.length < 5) {
        if (num === "." && numArr.includes(".")) return;
        const updatedNum = [...numArr, num];
        setNumArr(updatedNum);
        let second = updatedNum.join("");
        setSecondNum(Number(second));
        setResult(second); 
      }
    }
  };

  const handlePercentage = () => {
    if (firstNum !== null) {
      let res = firstNum / 100;
      setResult(res.toString());
      setFirstNum(res);
      setNumArr([]);
    }
  };

  const handleOpClick = (operator) => {
    if (firstNum !== null) {
      setOperator(operator);
      setOperation(null)
      setNumArr([]);
      setResult("0");
    }
  };

  const handleNegative = () => {
    let updatedNum = operator == null ? firstNum : secondNum;
    if (updatedNum !== null) {
      updatedNum = updatedNum * -1;
      if (operator == null) {
        setFirstNum(updatedNum);
      } else {
        setSecondNum(updatedNum);
      }
      setResult(updatedNum.toString());
    }
  };

  const handleDelete = () => {
    if (numArr.length === 0) return;

    const newNumArr = [...numArr];
    newNumArr.pop(); 

    const newNum = newNumArr.join("") || "0"; 
    if (operator == null) {
      setFirstNum(newNum === "0" ? null : parseFloat(newNum));
    } else {
      setSecondNum(newNum === "0" ? null : parseFloat(newNum));
    }
    setNumArr(newNumArr);
    setResult(newNum);
  };

  const calculate = () => {
    if (firstNum !== null && secondNum !== null) {
      let res;
      if (operator === "+") {
        res = firstNum + secondNum;
      } else if (operator === "-") {
        res = firstNum - secondNum;
      } else if (operator === "x") {
        res = firstNum * secondNum;
      } else if (operator === "/") {
        res = firstNum / secondNum;
      }
      setResult(res.toString());
      setOperation(`${firstNum} ${operator} ${secondNum} =`)
      setFirstNum(res);
      setSecondNum(null);
      setOperator(null);
      setNumArr(res.toString().split(""));
    }
  };

  return (
    <>
      <div id="results">
      <div className="operation">{operation}</div>
        {result}
      </div>

      <div id="btnContainer">
        <div className="btn lGrey" onClick={clear}>
          AC
        </div>
        <div className="btn lGrey" onClick={handleNegative}>
          +/- 
        </div>
        <div className="btn lGrey" onClick={handlePercentage}>
          %
        </div>
        <div className="btn orange" onClick={() => handleOpClick("/")}>
          ÷
        </div>
        <div className="btn dGrey" onClick={() => setNumber(7)}>
          7
        </div>
        <div className="btn dGrey" onClick={() => setNumber(8)}>
          8
        </div>
        <div className="btn dGrey" onClick={() => setNumber(9)}>
          9
        </div>
        <div className="btn orange" onClick={() => handleOpClick("x")}>
          x
        </div>
        <div className="btn dGrey" onClick={() => setNumber(4)}>
          4
        </div>
        <div className="btn dGrey" onClick={() => setNumber(5)}>
          5
        </div>
        <div className="btn dGrey" onClick={() => setNumber(6)}>
          6
        </div>
        <div className="btn orange" onClick={() => handleOpClick("-")}>
          -
        </div>
        <div className="btn dGrey" onClick={() => setNumber(1)}>
          1
        </div>
        <div className="btn dGrey" onClick={() => setNumber(2)}>
          2
        </div>
        <div className="btn dGrey" onClick={() => setNumber(3)}>
          3
        </div>
        <div className="btn orange" onClick={() => handleOpClick("+")}>
          +
        </div>
        <div className="btn dGrey" onClick={handleDelete}>
          ⌫
        </div>
        <div className="btn dGrey" onClick={() => setNumber(0)}>
          0
        </div>
        <div className="btn dGrey" onClick={() => setNumber(".")}>
          .
        </div>
        <div className="btn orange" onClick={calculate}>
          =
        </div>
      </div>
    </>
  );
}

export default App;

