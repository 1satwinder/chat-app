import React from 'react';
import Dashboard from "./Dashboard";
import io from 'socket.io-client';

/* Client connection
   Server listening
   emit event
   broadcast
   client receives message */

export const CTX = React.createContext();
/* 
  msg {
      from:'user'
      msg: 'hi'
      topic: 'general'
  }

  state{
      topic1: [
           {msg} , {msg} , {msg} 
      ]
      topic2: [
          {msg} , {msg}, {msg}
      ]
  }
*/

// we put this outside we dont want it to reload when our component reload
const initState = {
    general : [
        {from: "satw", msg: "hello"},
        {from: "jassi", msg: "by"},
        {from: "jass", msg: "kidha"},
   ], 
   news: [
       {from : "google", msg: "java"}, 
   ]
}
 
// we put this outside we dont want it to reload when our component reload
// action is the object we manually pass in
const reducer = (state,action) => {
    const {from , msg, topic} = action.payload; 
    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return {
                ...state, [topic]:[
                    ...state[topic], 
                    {
                        from: from,
                        msg: msg
                    }
                ]
            }
        default: 
             return state
    }

}

let socket = io(':3001');

function sendChatAction(value){
    socket.emit('chat message', value);
}

const Store = (props) => {

    // if(!socket){
    //     socket = io(':3001');
    // }

    const [allChat, dispatch] = React.useReducer(reducer, initState);
    return (
        <div>
            <CTX.Provider value={{allChat, sendChatAction}}>
              <Dashboard />
            </CTX.Provider>
        </div>
    )
}

export default Store;