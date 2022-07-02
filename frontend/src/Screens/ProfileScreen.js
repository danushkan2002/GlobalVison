import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserDetails } from '../Actions/userAction'
import Loader from '../Componets/Loader'
import Message  from '../Componets/Message'

const ProfileScreen = () => {
    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()
    const history = useNavigate()

    useEffect(() => {
      if (userInfo) {
        dispatch(getUserDetails('profile'))
      } else {
        history('/login')
      }
        
    }, [dispatch, history, userInfo]);


  return (
    <div className='mx-7 my-10'>
        {
          loading ? <Loader/> 
            : error ? <Message>{error}</Message>
              : <div>
                  <p className='text-4xl'>Hi....! {user.username}</p>
                  <p className='mt-5'>you are {user.age} years old</p>
                </div>
        }
    </div>
  )
}

export default ProfileScreen