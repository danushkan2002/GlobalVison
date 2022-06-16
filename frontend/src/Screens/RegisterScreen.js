import React, {useState, useEffect} from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'
import { register } from '../Actions/userAction'
import { useDispatch, useSelector } from 'react-redux'


const RegisterScreen = () => {
  const [username, setUsername] = useState('')
  const [birth_year, setBirth_year] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation()
  const history = useNavigate()

  const dispatch = useDispatch()

  const redirect = location.search ? location.search.split('=')[1]: '/'

    const userRegister = useSelector(state => state.userRegister)
    const {userInfo } = userRegister

    useEffect(()=> {
      if (userInfo) {
          history(redirect)
      }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(register(username, parseInt(birth_year), password))
  }
  return (
    <div className='font-ms'>
      <p className='text-4xl px-5 mt-10'>Register</p>
      <form onSubmit={submitHandler}>
        <input type={'text'} className='border my-5 mx-2' value={username} placeholder={username} onChange={(e) => setUsername(e.target.value) }></input>
        <input type={'number'} className='border my-5 mx-2' value={birth_year} placeholder={birth_year} onChange={(e) => setBirth_year(e.target.value) }></input>
        <input type={'password'} className='border my-5 mx-2' value={password} placeholder={password} onChange={(e) => setPassword(e.target.value) }></input>
        <button className='border px-4 bg-black text-white ' type={'submit'}>login</button>
      </form>
    </div>
  )
}

export default RegisterScreen