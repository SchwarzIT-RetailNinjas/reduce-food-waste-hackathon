import React from 'react'

import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';
function Koln() {
    function buttonOnClick (){
        addNotification({
          title: 'New Products on Discount! Hurry up!',
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