import React from 'react'

function Buttons({addOne, subtractOne, reset}) {
    //

  return (
    <div>
      <button onClick={addOne}>Add 1</button>
      <button onClick={subtractOne}>Subtract 1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Buttons

const add = (num1, num2) => {
    console.log(num1+num2)
    return num1 + num2
}

// add(1,2)
const arr = [1,2]
add(...arr)