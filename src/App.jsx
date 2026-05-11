// Context API: It is to manage and share the states across the nested components or component tree without need to pass the props data down through multiple levels of the nested components.

import React, { createContext, useState } from "react" ;
import ChildComponent from "./Components/ChildComponent";
//create a context for sharing the message data
const MessageContext = createContext();

function App(){
  //this message should be rendered inside the grandchild component 

  const [message, setMessage] = useState('Hello , Grand Child');
  const [coins, setCoins] = useState([1, 2, 3, 4, 5]);

  return(
    <div>
       <h1>Parent Component</h1>
       <hr/>
       <MessageContext.Provider value={{message, coins}}>
          <ChildComponent/>
       </MessageContext.Provider>
    </div>
  )
}

export { App as default , MessageContext};