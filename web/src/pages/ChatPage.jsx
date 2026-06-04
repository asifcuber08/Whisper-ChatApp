import { useAuth } from '@clerk/clerk-react'
import React from 'react'

function ChatPage() {
    const {signOut}= useAuth()
  return (
    <div>
      chatpage

      <button onClick={signOut}>SIGNOUT</button>
    </div>
  )
}

export default ChatPage
