import React,{ useEffect} from 'react'
import {getMessage} from '../Actions/inboxAction'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Loader from '../Componets/Loader'
import { useParams  } from 'react-router-dom'
import Message from '../Componets/Message'

const MessageScreen = () => {
  const {id} = useParams()
  
  const dispatch = useDispatch()

  const messageData = useSelector(state => state.messageData)
  const {messageLoading, messageError,message } = messageData

  useEffect(() => {
    dispatch(getMessage(id))
  },[dispatch, id])

  return (
    <div>
    {
      messageLoading ?
      <Loader/> :
      messageError ?
          <Message>{messageError}</Message> :

          (
            message.email
          )
    }
    </div>
  )
}

export default MessageScreen