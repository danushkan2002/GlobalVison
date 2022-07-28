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
    <div className='h-10vh  pt-50px lg:flex  bg-60 w-full md:px-14 lg:px-28 xl:px-32'>
        {
          usersLoading ? <div className='flex justify-center w-full mt-50px'>
          <Loader className='mx-auto'/> </div>
          : usersError ? <Message>{usersError}</Message> 
          :
          (
            <div className=' w-full'>
              
              {
                users.map((user)=>(
                  <Link to={`/users/${user.id}`} className='h-36 mx-25px sm:w-96 md:w-448 lg:w-512 bg-white shadow-base mt-16 flex rounded-md sm:mx-auto xl:mx-0'>
                      <div className='mx-auto ml-4 md:ml-8 my-auto'>
                          <p className='text-2xl font-Qu capitalize'>{user.username}</p>
                          <p className='text-xs lg:text-sm font-Qu text-gray-700'>{user.age} years old</p>
                          <p className='text-2xl font-Qu font-medium mt-8'>#{user.student_id}</p>
                      </div>
                      <div className='w-36 h-36 bg-slate-100 rounded-md'>

                      </div>
                  </Link>
                ))
              }

            </div>
          )
        }
    </div>
  )
}

export default UsersScreen


// <div>
//     {
//       usersLoading ?
//       <Loader/> :
//       usersError ?
//           <Message>{usersError}</Message> :
//           (
//             users.map((user) => (
//                   <div key={user.id} className="m-10 border">
//                       <Link to={`/users/${user.id}`} className='text-xl'>{user.username}</Link>
//                   </div>
//               ))
//           )
//     }
//   </div>