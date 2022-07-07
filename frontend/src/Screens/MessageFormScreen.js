import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'
import { createMessage } from '../Actions/inboxAction'

const MessageFormScreen = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()
    const history = useNavigate()

    const messageCreateData = useSelector(state => state.messageCreateData)
    const {messageCreateLoading, messageCreateError, messageCreateSuccess } = messageCreateData

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createMessage(username, email, subject, content)) 
    }

  return (
    <div className='font-ms'>
      <p className='text-4xl px-5 mt-10'>Review</p>
      {
        messageCreateLoading ?
          (<Loader/>) :
          messageCreateError ? 
            (<Message>{messageCreateError}</Message>) :
            messageCreateSuccess ?
              (
                history('/')
              ) :
              (
                <form onSubmit={submitHandler}>
                  <input type={'text'} className='border my-5 mx-2' value={username} placeholder={'username'} onChange={(e) => setUsername(e.target.value) }></input>
                  <input type={'text'} className='border my-5 mx-2' value={email} placeholder={"email"} onChange={(e) => setEmail(e.target.value) }></input>

                  <input type={'text'} className='border my-5 mx-2' value={subject} placeholder={'subject'} onChange={(e) => setSubject(e.target.value) }></input>

                  <input type={'text'} className='border my-5 mx-2' value={content}  placeholder={'content'} onChange={(e) => setContent(e.target.value) }>
                  </input>

                  <button className='border px-4 bg-black text-white ' type={'submit'}>submit</button>
                </form>
              )
      }
      
    </div>  )
}

export default MessageFormScreen