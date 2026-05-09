
import React from "react" ;
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Notes from "./Components/Notes";
import Users from "./Components/Users";

function App(){
  const padding = {
    padding:5 ,
  }
  return(
    <Router>
      <div>
        <Link to='/' style={padding}>Home</Link>
        <Link to='/notes' style={padding}>Notes</Link>
        <Link to='/users' style={padding}>Users</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
    </Router>
  )
}

export default App ;