
import React from "react" ;

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
 const lists = [
  {
    name:"vinoth",
    age:21,
    email:"vinoth@gmail.com"
  },
  {
    name:"vignesh",
    age:20,
    email:"vignesh@gmail.com"
  },
  {
    name:"raja",
    age:18,
    email : "raja@gmail.com"
  }
 ];
  return(
    <div>
        <Lists lists = {lists}/>
    </div>
  )
}

export default App ;