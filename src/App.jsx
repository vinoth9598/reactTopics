
import React from "react" ;
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

// reducer 
const reducer = (state = {count : 0}, action) => {
  switch (action.type) {
    case "Incr" :
      return {count : state.count + 1} ;
    case "Decr" :
      return {count : state.count - 1} ;
    default :
      return state ;
  }
};

// Store 
const store = createStore(reducer);


// function counter 

function Counter(){
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch() ;

  return (
    <div style={{ textAlign:"center", marginTop:"50px"}}>
      <h1>React Redux Example</h1>
      <h2>count : {count}</h2>
      <button onClick={()=> dispatch({type:"Incr"})}>Increment</button>
      <button onClick={()=> dispatch({type:"Decr"})} style={{marginLeft:"10px"}}>Decrement</button>
    </div>
  )
}
function App(){
  return(
    <Provider store = {store}>
        <Counter />
    </Provider>
  )
}

export default App ;