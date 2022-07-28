import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserDetails } from '../Actions/userAction'
import Loader from '../Componets/Loader'
import Message  from '../Componets/Message'
import { HiPlus, HiPlusSm } from 'react-icons/hi'


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
    <div className='h-10vh  pt-50px lg:flex  bg-60 w-full md:px-14 lg:px-28 xl:px-32'>
        {
          userProfileLoading ? <div className='flex justify-center w-full mt-50px'>
          <Loader className='mx-auto'/> </div>
          : userProfileError ? <Message>{userProfileError}</Message> 
          :
          (
            <div className='xl:flex w-full'>
              <div className='h-36 mx-25px sm:w-96 md:w-448 lg:w-512 bg-white shadow-base mt-16 rounded-md flex sm:mx-auto xl:mx-0'>
                  <div className='mx-auto ml-4 md:ml-8 my-auto'>
                      <p className='text-2xl font-Qu capitalize'>{userProfile.username}</p>
                      <p className='text-xs lg:text-sm font-Qu text-gray-700'>{userProfile.age} years old</p>
                      <p className='text-2xl font-Qu font-medium mt-8'>#{userProfile.student_id}</p>
                  </div>
                  <div className='w-36 h-36 bg-slate-100 rounded-md'>

                  </div>
              </div>
              <div className='ml-auto'>
                <div className='h-14 lg:h-16 mt-14 lg:mt-16 mx-25px sm:w-96 md:w-448 lg:w-512 shadow-m sm:mx-auto rounded-md flex items-center justify-center bg-white'>
                <p className='font-Qu text-base font-semibold text-black'>
                  {
                    userProfile.is_admin ?
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

export default ProfileScreen


// <div className='mx-7 my-10'>
//         {
//           userProfileLoading ? <Loader/> 
//             : userProfileError ? <Message>{userProfileError}</Message>
//               : <div>
//                   <p className='text-4xl'>Hi....! {userProfile.username}</p>
//                   <p className='mt-5'>you are {userProfile.age_category} years old Category</p>
//                 </div>
//         }
//     </div>