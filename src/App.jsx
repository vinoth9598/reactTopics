import React, { useState } from 'react'

function useCounter(){
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount (count -1);
  }
  return {count, increment, decrement} ;
}

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App