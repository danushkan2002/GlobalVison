import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../Actions/userAction'
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'
import { useParams  } from 'react-router-dom'

const UserScreen = () => {
    const {id} = useParams()

    const dispatch = useDispatch()

    const userData = useSelector(state => state.userData)
    const {userLoading, userError,user } = userData

    useEffect(() => {
      dispatch(getUser(id))
    },[dispatch, id])

    useEffect(() => {
        dispatch(getUser(id))
    },[dispatch,id])
  return (
    <div>
    {
      userLoading ?
      <Loader/> :
      userError ?
          <Message>{userError}</Message> :    
          (
            user.username
          )
    }
    </div>
  )
}

export default UserScreen