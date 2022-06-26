import React from "react";

import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';
import { io } from "socket.io-client";
const ENDPOINT = "http://socket:3000";

function Frankfurt() {
  function buttonOnClick() {
    const socket = io(ENDPOINT);
    socket.emit("subscribe", "14545-all", () => {
      console.log("Subscribe successfully")
    });
    addNotification({
      title: 'Successfully subscribe to Lidl store at Goldsteinstraße 157',
      native: true
    })
  };
  return (
    <div className="frankfurt">
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

export default Frankfurt
