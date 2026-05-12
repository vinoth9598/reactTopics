import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' ;
import App from './App.jsx' ;

import { createStore } from 'redux';

const counterReducer = (state = 0, action) => {
    console.log(action) ;

    switch(action.type) {
        case 'Incr' :
            return state + 1 ;
        case 'Decr' :
            return state - 1 ;
        default :
            return state ;
    }
}

//create a store 
const store = createStore(counterReducer);

//get the current store state 
console.log(store.getState());

//update action
store.dispatch({
    type : 'Incr'
})
console.log(store.getState());

createRoot(document.getElementById('root')).render(
    <App />
);
