React all Basic concepts and hooks 

1. Components
  Functional Component
    function Welcome() {
      return <h1>Hello</h1>;
    }
  Class Component
    class Welcome extends React.Component {
      render() {
        return <h1>Hello</h1>;
      }
    }
   
3. Props

Used to pass data between components.
  function User(props) {
    return <h1>{props.name}</h1>;
  }
  
4. State

Used to manage dynamic data.
  const [count, setCount] = useState(0);
  
5. Event Handling
  <button onClick={handleClick}>Click</button>

  Events:
  onClick
  onChange
  onSubmit
  onMouseOver
  
6. Conditional Rendering
{isLogin ? <h1>Welcome</h1> : <h1>Login</h1>}

8. Lists and Keys
users.map((user) => <li key={user.id}>{user.name}</li>)

9. Forms
Controlled Component
<input value={name} onChange={(e)=>setName(e.target.value)} />

React Hooks
1. useState

Manages state.

const [count, setCount] = useState(0);

2. useEffect

Handles side effects.

useEffect(() => {
  console.log("Rendered");
}, []);

Uses:

API calls
Timers
DOM updates

3. useContext

Used for global state.

const value = useContext(UserContext);

4. useRef

Access DOM elements without re-render.

const inputRef = useRef();

5. useMemo
Memoizes values.

const result = useMemo(() => num * 2, [num]);

6. useCallback

Memoizes functions.

const handleClick = useCallback(() => {}, []);

7. useReducer

Alternative for complex state.

const [state, dispatch] = useReducer(reducer, initialState);
8. Custom Hooks

Reusable hook logic.

function useCounter() {
  const [count, setCount] = useState(0);
}

React Router Topics
  Installation
    npm install react-router-dom
    
    Main Components
      BrowserRouter
      Routes
      Route
      Link
      useNavigate
      useParams

Example:
  <Route path="/home" element={<Home />} />
  
API Handling
  Fetch API
  fetch("https://api.com/users")
  Axios
  axios.get("url")
