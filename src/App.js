import './App.css';
import { useState } from 'react';

// components
import Buttons from './components/Buttons';


function App() {
  // setting use state happens within component
  // const [variableName, setVariableName] = useState(initial value)
  const [count, setCount] = useState(0)
  const [evenCount, setEvenCount] = useState(0) //starting at 1 bc 0 is technically even

  // use state to conditionally render color
  const [color, setColor] = useState('') // inital state can also be null apparently

  //function to add count
  const addOne = () => {
    setCount(count + 1)
    // count % 2 ===0 && setEvenCount(evenCount + 1)
    if((count + 1) % 2 === 0){
      setEvenCount(count + 1)
      setColor('even')
    } else {
      setColor('odd')
    }
  }

  const subtractOne = () => {
    setCount(count - 1)
    // count % 2 === 0 && setEvenCount(evenCount - 1)
    if((count + 1) % 2 === 0 ){
      setEvenCount(count - 1)
      setColor('even')
    } else {
      setColor('odd')
    }
  }

  const reset = () => {
    setCount(0)
    setEvenCount(0)
  }

  return (
    <div className="App">
      <h1>COUNTER</h1>
        {/* display count */}
      <h3>All Count: <p className={count % 2 === 0 && count != 0 ? 'even' : 'odd'}>{count}</p></h3>

  {/* truthee one liner */}
      {count % 2 === 0 && <p>This is an even number</p>}

      <h4>Other Count Different Conditional Rendering: <p className={color}>{count}</p></h4>

      <h3>Even: {evenCount}</h3>

      <Buttons addOne={addOne} subtractOne={subtractOne} reset={reset}/> {/* 'react element' */}
    </div>
  );
}

export default App;

//if passing down too many things code needs reworked.. useContext or something like that lol