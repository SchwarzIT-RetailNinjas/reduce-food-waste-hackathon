import React from 'react'

import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';
import { io } from "socket.io-client";
const ENDPOINT = "http://socket:3000";

function Berlin() {
  function buttonOnClick() {
    const socket = io(ENDPOINT);
    socket.emit("subscribe", "54766-all", () => {
      console.log("Subscribe successfully")
    });
    addNotification({
      title: 'Successfully subscribe to Lidl store at Goldsteinstraße 157',
      native: true
    })
  };
  return (
    <div className="berlin">
      <Notifications />
      <div className='citystore'>
        <div className='lidlimage'></div>
        <button onClick={buttonOnClick} className="subscribe">
          Subscribe
        </button>
      </div>
    </div>

  )
}

export default Berlin