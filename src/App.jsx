// Context API: It is to manage and share the states across the nested components or component tree without need to pass the props data down through multiple levels of the nested components.

import React, { useReducer } from "react" ;
import { initialState, reducer } from "./countReducer";

function App(){
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <div>
        <h3>useReducer using counter : {state.count}</h3>
        <button onClick={() => dispatch({ type:"Incr" })}>Increment</button>
        <button onClick={() => dispatch({ type:"Decr" })}>Decrement</button>
        <button onClick={() => dispatch({ type:"reset" })}>Reset</button>
    </div>

  )
}

export { App as default , MessageContext};