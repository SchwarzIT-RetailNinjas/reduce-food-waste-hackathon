import React from 'react'

import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';

import { io } from "socket.io-client";
const ENDPOINT = "http://socket:3000";
const socket = io(ENDPOINT);

function Muchen() {
  function buttonOnClick (){
    socket.emit("subscribe", "32346-all", () => {
      console.log("Successfully subscribed");
    });
    addNotification({
      title: 'Successfully subscribe to Lidl store at Choriner Str. 64/64a',
      native:true         
    })        
  };
  return (
    <div className="muchen">
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

export default Muchen