import React from 'react'
import { MessageContext } from '../App';
import GrandChildComponent from './GrandChildComponent';
function ChildComponent() {
  return (
    <MessageContext.Consumer>
        {
            (data)=>(
                <div>
                    <h2>Child Component</h2>
                    <p>Message from Parent : {data.message}</p>
                    <hr/>
                    <GrandChildComponent/>
                </div>
            )
        }
    </MessageContext.Consumer>
  )
}

export default ChildComponent ;