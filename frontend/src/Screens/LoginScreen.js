import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  useLocation, useNavigate } from 'react-router-dom'
import { login } from '../Actions/userAction'

const LoginScreen = () => {
  const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation()
    const history = useNavigate()
    const dispatch = useDispatch()


    const redirect = location.search ? location.search.split('=')[1]: '/'

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(()=> {
      if (userInfo) {
          history(redirect)
      }
  }, [history, userInfo, redirect])
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(username, password))
  }

  return (
    <div className='font-ms'>
      <p className='text-4xl px-5 mt-10'>Login</p>
      <form onSubmit={submitHandler}>
        <input type={'text'} className='border my-5 mx-2' value={username} placeholder={username} onChange={(e) => setUsername(e.target.value) }></input>
        <input type={'password'} className='border my-5 mx-2' value={password} placeholder={password} onChange={(e) => setPassword(e.target.value) }></input>
        <button className='border px-4 bg-black text-white ' type={'submit'}>login</button>
      </form>
    </div>
  )
}

export default LoginScreen