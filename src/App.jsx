// Context API: It is to manage and share the states across the nested components or component tree without need to pass the props data down through multiple levels of the nested components.

import React from "react" ;
import { useRef } from "react";
/* useRef hook
  -Its a reacts built in feature
  - To create and manage references of DOM elements
  - We can manipulate the elements using the reference without 
  any unnecessary re-renders.
*/

function App(){
  //get the reference of the button
  const bodyRef = useRef(document.body);

  const changeColor = () => {
    const colors = ['red','blue','green','yellow','purple','pink','black','orange','white']
    const randomColor = colors[Math.floor(Math.random()*10)];
    bodyRef.current.style.backgroundColor = randomColor ;
  }
  return(
    <div>
        <h3>Background Color Switcher</h3>
        <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export { App as default , MessageContext};