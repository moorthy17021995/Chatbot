import React from 'react'
import ChatMessage from '../ChatMessage'
import { useState } from 'react'

const ChatMessages = ( {Chat, SetChat}) => {
    
  
    
    return (
        <>
        
        {Chat.map((msg) => (
       <ChatMessage message={msg.message} sender={msg.sender} key={msg.id} />
            ))}
        </>
    )
}

export default ChatMessages