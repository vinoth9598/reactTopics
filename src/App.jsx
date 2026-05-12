
import axios from "axios";
import React, { useEffect, useState } from "react" ;

//mock server using this steps
//npm install json-server, axios for api and create db.json file add json files
// npx json-server --watch db.json --port 3001 

function App(){

  const [users, setUsers] = useState([]);
  const [content, setContent] = useState("");
  const [editContent, setEditContent] =useState(null);

  //Read 
  const getUsers = () =>{
    axios.get("http://localhost:3001/notes")
    .then((res)=> setUsers(res.data));
  };


  //useEffect hook
  useEffect(()=>{
    getUsers();
  },[]);

  //create 
  const addUser = () => {
    axios.post("http://localhost:3001/notes", {content})
    .then(() => {
      setContent("");
      getUsers();
    })
  }

  //delete 
  const deleteUser = (userId) => {
    axios.delete(`http://localhost:3001/notes/${userId} `)
    .then(() => {
      alert("content is deleted successfully.");
      getUsers();
    })
  };

  //editContent 
  const editUser = (user) => {
    setContent(user.content);
    setEditContent(user.id);
  };

  const updateUser = () =>{
    axios.put(`http://localhost:3001/notes/${editContent}`, {
      id:editContent,
      content : content 
    })
    .then(()=> {
      setContent("");
      setEditContent("");
      getUsers();
    })
  }
  
  return(
    <div>
       <h3>CRUD App</h3>
       <input
          type="text"
          placeholder="Enter Content"
          value = {content}
          onChange={(e)=> setContent(e.target.value) }
       />
       {
        editContent ? (
          <button onClick={updateUser}>Update</button>
        ):(
          <button onClick={addUser}>Add</button>
        )
       }
        <hr/>
       <div>
          {
            users.map((user)=>(
              <li key={user.id}>
                {user.content}
                <br/>
                <button onClick={()=>deleteUser(user.id)}>Delete</button>
                <button onClick={()=> editUser(user)}>Edit</button>
                <hr/>
              </li>
            ))
          }
       </div>
    </div>
  );
}

export default App ;