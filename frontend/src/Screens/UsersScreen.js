import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../Actions/userAction'

import Loader from '../Componets/Loader'
import Message from '../Componets/Message'
import { Link } from 'react-router-dom'

const UsersScreen = () => {
    const usersData = useSelector(state => state.usersData)
    const {usersLoading, usersError,users } = usersData

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    },[dispatch])


  return (
    <div>
    {
      usersLoading ?
      <Loader/> :
      usersError ?
          <Message>{usersError}</Message> :
          (
            users.map((user) => (
                  <div key={user.id} className="m-10 border">
                      <Link to={`/users/${user.id}`} className='text-xl'>{user.id}</Link>
                  </div>
              ))
          )
    }
  </div>
  )
}

export default UsersScreen