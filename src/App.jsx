import React, { useMemo, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //Expensive calculation
  const squareValue = useMemo(() => {
    console.log("Calculating...") ;
    return count * count ;

  },[count]); //runs only count changes

  return (
    <div>
      <h3>useMemo hook Example</h3>

      <p>Count : {count}</p>
      <p>Squared Value : {squareValue}</p>

      <button onClick={()=> setCount(count + 1)}>Increment</button><br/>

      <input
        type='text'
        placeholder='Type here'
        value={text}
        onChange={(e)=> setText(e.target.value)}
      />
    </div>
  )
}

export default App;