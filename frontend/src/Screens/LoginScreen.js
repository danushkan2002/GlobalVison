import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {   useNavigate } from 'react-router-dom'
import { getUserDetails, login } from '../Actions/userAction'
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
      } else {
        dispatch(getUserDetails())
      }
    }, [dispatch ,history, userInfo])
    
    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(login(username, password))
    }

  return (
    <div className='px-5 md:px-28 flex justify-center mt-75px'>
        {
          loading ?
          <Loader/> :
          error ?
          <Message>{error}</Message> :
          (
            <form onSubmit={submitHandler} className='h-fit mt-7 md:mt-14 lg:mt-1vh'>
              <p className='text-m-sub-title lg:text-w-sub-title font-bold tracking-wide uppercase font-Heebo'>Login</p>
              <input value={username}  onChange={(e) => setUsername(e.target.value)} type={'text'} className='bg-white mt-7 h-10 flex text-sm font-Heebo w-80 lg:w-96 rounded-md px-7 shadow-base outline-none text-m-text\ lg:text-w-text lowercase' placeholder='ID'></input>
              <input value={password}  onChange={(e) => setPassword(e.target.value) } type={'password'} className='bg-white mt-7 h-10 text-sm flex font-Heebo w-80 lg:w-96 rounded-md px-7 shadow-base outline-none' placeholder='Password'></input>
              <button type={'submit'} className='bg-30 h-10 text-sm font-Heebo w-80 lg:w-96 rounded-md fixed bottom-7 md:bottom-14 text-10 mt-56'>Login</button>
            </form>
          )
        }
    </div>
  )
    
}

export default LoginScreen




// <div className='font-ms'>
//       <p className='text-4xl my-5 mx-8 py-1'>Login</p>
//       {error && <Message>{error}</Message>}
//       {loading && <Loader/>}
//       <form onSubmit={submitHandler} className='my-5 mx-8 py-1 '>
//         <input 
//           type={'text'} 
//           className='border mr-5 ' 
//           value={username} 
//           placeholder={username} 
//           onChange={(e) => setUsername(e.target.value)}/>

//         <input 
//           type={'password'} 
//           className='border mr-5' 
//           value={password} 
//           placeholder={password} 
//           onChange={(e) => setPassword(e.target.value) }/>
        
//           <button className='border px-4 bg-black text-white ' type={'submit'}>login</button>

        
//       </form>
//     </div>
//   )