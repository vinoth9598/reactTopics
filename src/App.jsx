
import React, { useEffect, useState } from "react" ;

function App(){
  const [count, setCount] = useState(0);

  const [posts, setPosts] = useState(null);

  const fetchPosts = async () =>{
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let data = await response.json();
    setPosts(data);
  }
  // title change
  useEffect(()=>{
    document.title = `Count : ${count}`
  },[count]);

  //data fetched using useEffect hook
  //The following will run only once  
  useEffect(()=>{
    fetchPosts();
  },[]);

  const handleChange = ()=>{
    setCount(count + 1);
  }
  console.log(count);
  return(
    <div>
      <h2>Document Title change</h2>
      <button onClick={handleChange}>Change Count</button>
      <hr/>
      <h3>API DATA</h3>
      {
        posts ? (
          <ul>
            {
              posts.map(post => 
                <li key={post.id}>{post.title}</li>
              )
            }
          </ul>
        ):(
          <p>Fetching Data...</p>
        )
      }
    </div>
  )
}

export default App ;