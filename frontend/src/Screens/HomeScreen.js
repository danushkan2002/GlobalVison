import React, {useEffect} from 'react'
import { useNavigate , useLocation} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSubjectsDetails } from '../Actions/subjectAction'

const HomeScreen = () => {
  const location = useLocation()
    const history = useNavigate()
    const dispatch = useDispatch()



    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(()=> {
      if (userInfo) {
        dispatch(getSubjectsDetails())
      } else{
        history('/login')
      }
    }, [history, userInfo])

  return (
    <div className='w-fill h-8vh flex justify-center items-center'>
      <p className='text-xl'>This is Home page...!</p>
    </div>
  )
}

export default HomeScreen