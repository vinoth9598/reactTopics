import React, { useMemo, useState } from 'react'

import React, { useCallback, useState, memo } from 'react'

const Child = memo(({onSave})=>{
  console.log("Child Rendered!");

  return (
    <div>
      <button onClick={onSave}>Save</button>
    </div>
  )
})

function App() {
  const [count, setCount] = useState(0);

  //function will not recreate on every render
  const handleSave = useCallback(()=>{
    alert("Data Saved")
  },[]) ;

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=> setCount(count + 1)}>
            Increment
        </button>

        <Child onSave = {handleSave}/>
    </div>
  )
}

export default App;