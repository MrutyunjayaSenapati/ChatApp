    import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import MessageInput from './MessageInput';
import ChatHeader from './ChatHeader';
import MessageSkeleton from './skeletons/MessageSkeleton';
    
    
    function ChatContainer() {
      const {messages,getMessages,isMessagesLoading,selectedUser}=useChatStore();


      useEffect(()=>{
        getMessages(selectedUser._id)
      },[selectedUser._id,getMessages])

      if(isMessagesLoading){
        return (
      <div className="flex-1 flex flex-col overflow-aut">
        <ChatHeader/>
        <MessageSkeleton/>
        <MessageInput/>
      </div>
      )
    }
      return (
        <div className='flex-1 flex flex-col overflow-auto'>
          <ChatHeader/>
          <p>messages...</p>
          <MessageInput/>
          
        </div>
      )
    }
    
    export default ChatContainer