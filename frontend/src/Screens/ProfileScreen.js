import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserDetails } from '../Actions/userAction'
import Loader from '../Componets/Loader'
import Message  from '../Componets/Message'

const ProfileScreen = () => {
    const userProfileData = useSelector(state => state.userProfileData)
    const { userProfileError, userProfileLoading, userProfile } = userProfileData

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
          userProfileLoading ? <Loader/> 
            : userProfileError ? <Message>{userProfileError}</Message>
              : <div>
                  <p className='text-4xl'>Hi....! {userProfile.username}</p>
                  <p className='mt-5'>you are {userProfile.age_category} years old Category</p>
                </div>
        }
    </div>
  )
}

export default ProfileScreen