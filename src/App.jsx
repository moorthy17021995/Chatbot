import { useState } from 'react'
import ChatMessage from './ChatMessage'
import ChatInput from './assets/ChatInput'
import ChatMessages from './assets/ChatMessages'



function App() {
  const[Chat, SetChat]=useState([{ message: "Hello, Chatbot?", sender: "user", id:"id1" },
    { message: "Hello, how can I help you?", sender: "bot",id:"id2" },
    { message: "Can you get me today date?", sender: "user",id:"id3" },
    { message: "Today's date is...", sender: "bot",id:"id4" }]);
  
  return (
    <div className="  flex flex-col h-screen  w-120 mx-auto  ">
      <ChatInput Chat={Chat} SetChat={SetChat} />
      <ChatMessages Chat={Chat} SetChat={SetChat}/>
    </div>
  )
}

export default App
