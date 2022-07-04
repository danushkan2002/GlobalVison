import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {   useNavigate } from 'react-router-dom'
import { login } from '../Actions/userAction'
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'

const LoginScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, loading, error } = userLogin


    useEffect(()=> {
      if (userInfo) {
          history('/')
      } 
    }, [history, userInfo])
    
    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(login(username, password))
    }

  return (
    <div className='font-ms'>
      <p className='text-4xl my-5 mx-8 py-1'>Login</p>
      {error && <Message>{error}</Message>}
      {loading && <Loader/>}
      <form onSubmit={submitHandler} className='my-5 mx-8 py-1 '>
        <input 
          type={'text'} 
          className='border mr-5 ' 
          value={username} 
          placeholder={username} 
          onChange={(e) => setUsername(e.target.value)}/>

        <input 
          type={'password'} 
          className='border mr-5' 
          value={password} 
          placeholder={password} 
          onChange={(e) => setPassword(e.target.value) }/>
        
          <button className='border px-4 bg-black text-white ' type={'submit'}>login</button>

        
      </form>
    </div>
  )
}

export default LoginScreen