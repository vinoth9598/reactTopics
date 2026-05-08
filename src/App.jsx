
import React from "react" ;

//using data transfer to data destructure.
function Hello({data}){
  console.log(data);
  return(
    <div>
      <p>Welcome to component</p>
      <p>my name is {data.name}</p>
    </div>
  )
}

function User(prop){
  console.log(prop.data);
  return(
    <div>
      <p>
        {`My name is ${prop.data.name} my age is ${prop.data.age} and email ${prop.data.email}`}
      </p>
    </div>
  )
}

function App(){
  let name = "vinoth kumar" ;
  let a = 10 ;
  let b = 20 ;
  
  const data = {
    name : "vinoth",
    age : 20,
    email:"vinoth@gmail.com"
  }
  return(
    <div>
        <p> my name is {name}</p>
        <p>{a} plus {b} is {a+b}</p>

        <Hello data = {data}/>
        <User data = {data}/>
    </div>
  )
}

export default App ;