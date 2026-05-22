import React from 'react'
import { useState } from 'react'


const ChatInput = ({Chat,SetChat}) => {
  const [inputText,setInputText]=useState('');

function SaveInputText(event){
 setInputText(event.target.value)

}

  async function Addmessage() {

    if (!inputText.trim()) return;

    // Save user message immediately
    SetChat([
      ...Chat,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ]);

    // Wait 1 second and get bot response
    const response =
      await window.Chatbot.getResponseAsync(inputText);

    // Add bot message
    SetChat((previousChat) => [
      ...previousChat,
      {
        message: response,
        sender: 'bot',
        id: crypto.randomUUID()
      }
    ]);

    setInputText('');
  }
  return (
     <div className=' flex justify-center items-center h-30'>
     <input className='border border-gray-300 rounded p-2 mr-2 w-100' type="text" placeholder='send msg to chatbot'
      onChange={SaveInputText} value={inputText} 
      onKeyDown={(event) => {
       if (event.key === 'Enter') {
       Addmessage();
        }
      }} />
     <button className='bg-green-400 h-10 px-5 rounded-2xl flex items-center justify-center leading-none font-medium' onClick={Addmessage}>Send</button>
    
    </div>
  )
}

export default ChatInput