import React from 'react'
import { useParams } from 'react-router-dom'
const Chat = () => {
    const params = useParams()
  return (
    <div>
        <h1>This is in production</h1>
        
        Chatting with {params.id} 

    </div>
  )
}

export default Chat