import React from 'react'
import icon from './assets/icon.png'
import robot from './assets/robot.png'

const ChatMessage = ({ message, sender }) => {

  return (
    <div className='flex'>
       {sender === "bot" && 
        <img src={robot} alt="Robot" className='w-6 h-8'/>
      }
      {message}
      
       {sender === "user" && 
          <img src={icon} alt="Icon" width={30} height={30}/>
        }
    </div>
  )
}

export default ChatMessage