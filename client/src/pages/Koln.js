import React from 'react'

import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';
import { io } from "socket.io-client";
const ENDPOINT = "http://socket:3000";

function Koln() {
  function buttonOnClick (){
    const socket = io(ENDPOINT);
    socket.emit("subscribe", "87348-all", () => {
      console.log("Subscribe successfully")
    });
    addNotification({
      title: 'Successfully subscribe to Lidl store at Choriner Str. 64/64a',
      native:true         
    })        
  };
  return (
    <div className="koln">
        <Notifications/>
        <div className='citystore'>
          <div className='lidlimage'></div>
          <button onClick={buttonOnClick} className="subscribe"> 
          Subscribe
          </button>
        </div>
</div>

  )
}

export default Koln