import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../Actions/userAction'
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'
import { useParams  } from 'react-router-dom'
import { HiPlus, HiPlusSm } from 'react-icons/hi'


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
    <div className='h-10vh  pt-50px lg:flex  bg-60 w-full md:px-14 lg:px-28 xl:px-32'>
        {
          userLoading ? <div className='flex justify-center w-full mt-50px'>
          <Loader className='mx-auto'/> </div>
          : userError ? <Message>{userError}</Message> 
          :
          (
            <div className='xl:flex w-full'>
              <div className='h-36 mx-25px sm:w-96 md:w-448 lg:w-512 bg-white shadow-base mt-16 rounded-md flex sm:mx-auto xl:mx-0'>
                  <div className='mx-auto ml-4 md:ml-8 my-auto'>
                      <p className='text-2xl font-Qu capitalize'>{user.username}</p>
                      <p className='text-xs lg:text-sm font-Qu text-gray-700'>{user.age} years old</p>
                      <p className='text-2xl font-Qu font-medium mt-8'>#{user.student_id}</p>
                  </div>
                  <div className='w-36 h-36 bg-slate-100 rounded-md'>

                  </div>
              </div>
              <div className='ml-auto'>
                <div className='h-14 lg:h-16 mt-14 lg:mt-16 mx-25px sm:w-96 md:w-448 lg:w-512 shadow-m sm:mx-auto rounded-md flex items-center justify-center bg-white'>
                <p className='font-Qu text-base font-semibold text-black'>
                  {
                    user.is_admin ?
                    (
                      <div>Admin</div>
                    ) : (
                      <p>Student</p>
                    )
                  }
                </p>
                </div>
                <div className='mt-14 lg:mt-16 sm:mx-auto mx-25px  sm:w-96 md:w-448 lg:w-512'>
                    <div className='flex items-center'>
                        <p className='font-Qu font-medium'>Following Courses</p>
                        <HiPlus className='text-2xl ml-auto'/>
                    </div>
                    <div className='bg-white shadow-base mt-7 lg:mt-8 w-full h-fit shadow-m p-8 rounded-md
                    '>
                        <div className='my-auto'>
                            <p className='font-Qu  font-medium text-xl lg:text-2xl'>Three months projects</p>
                            <p className='font-Qu text-xs lg:text-sm'>Started</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          )
        }
    </div>
  )
}

export default UserScreen


// <div>
//     {
//       userLoading ?
//       <Loader/> :
//       userError ?
//           <Message>{userError}</Message> :    
//           (
//             user.username
//           )
//     }
//     </div>