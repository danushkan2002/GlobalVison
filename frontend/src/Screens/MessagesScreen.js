import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'
import { Link } from 'react-router-dom'
import {getMessages} from '../Actions/inboxAction'

const MessagesScreen = () => {
  
  const dispatch = useDispatch()
  
  const messagesData = useSelector(state => state.messagesData)
  const {messagesLoading, messagesError, messages } = messagesData

  useEffect(() => {
    dispatch(getMessages())
  },[dispatch])

  return (
    <div>
      {
        messagesLoading ?
        <Loader/> :
        messagesError ?
            <Message>{messagesError}</Message> :
            (
              messages.map((message) => (
                    <div key={message.id} className="m-10 border">
                        <Link to={`/inbox/${message.id}`} className='text-xl'>{message.email}</Link>
                    </div>
                ))
            )
      }
    
    </div>
  )
}

export default MessagesScreen