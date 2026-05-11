import React, { useContext } from 'react'
import { MessageContext } from '../App';

function GrandChildComponent() {
    const {message, coins} = useContext(MessageContext);
    const coinsSum = () =>{
        return coins.reduce((prev, curr)=> prev + curr, 0);
    }
  return (
    <div>
        <h3>Grand Child Component</h3>
        <p>Message from Child Component: {}</p>
        <p>Remaining Coins : {coinsSum()}</p>
    </div>
  )
}

export default GrandChildComponent ;