
import React, { useState } from "react" ;

function Lists({lists}){
  return(
    <div>
      <h3>List Details</h3>
      {
        lists.map((list , index) => (
          <div key={index}>
            <h3>{list.name}</h3>
            <p>{list.age}</p>
            <p>{list.email}</p>
            <hr/>
          </div>
        ))
      }
    </div>
  )
}

function App(){
  // useState hooks - manipulate to user data and states

  const [data, setData] = useState(0);
  const [stringValue, setStringValue] = useState("nothing");
  const [toggle, setToggle] = useState([])
  
  const handleData = () => {
    
    let names = ["vinoth","vijay","krishna","Prabu","Anni"]
    let len = names.length ;

    let num = Math.floor(Math.random() * len );
    console.log(num);
    let name = names.find((name, index) => index == num)
    console.log(name)

    setToggle(name);
  }
  return(
    <div>
      <h3>How to handle useState hooks examples</h3>
      <p>Example - first</p>
      <p>Output : {data}</p>
       <button onClick={()=>setData(data + 1)}>Plus</button>
       <button onClick={()=> setData(data - 1)}>Minus</button>
       <button onClick={()=> setData(0)}>Zero</button>
       <hr/>
       <p>Example - second </p>
       <p>Output-2 : {stringValue}</p>
       <input type="text" onChange={(e)=>setStringValue(e.target.value)}/>
       <hr/>
       <p>Example - Third</p>
       <p>Output - 3 : {toggle}</p>
       <button onClick={handleData}>Toggle</button>
       <hr/>
    </div>
  )
}

export default App ;