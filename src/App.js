import { useState } from 'react';
import './App.css';


function App() {

  const [num, setNum] = useState(0);

  const handleInputChange = (event) => {
    setNum(event.target.value);
  };

  const isFizz = (n) => {
    return n % 3 === 0 || n.toString().includes('3');
  };

  const isBuzz = (n) => {
    return n % 5 === 0 || n.toString().includes('5');
  };

  const fizzBuzz = () => {
    let output = "";
    for (let i = 1; i <= num; i++) {
      if (isFizz(i) && isBuzz(i)) {
        output += "FizzBuzz ";
      } else if (isFizz(i)) {
        output += "Fizz ";
      } else if (isBuzz(i)) {
        output += "Buzz ";
      } else {
        output += i + " ";
      }
    }
    return output.trim();
  };

  return (
    <div className="App">
      <h1>
        Fizz Buzz App
      </h1>
      <p>
        Hello, i'm <b>Haitam GHALEM</b>, Please enjoy the Game.
      </p>
      <div>
        <label>
          Please enter a number:
          <input type="number" value={num} onChange={handleInputChange} />
        </label>
        <br />
        <p>{fizzBuzz()}</p>
      </div>
    </div>
  );
}

export default App;



