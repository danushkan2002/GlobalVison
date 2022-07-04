import React, {useEffect} from 'react'
import { useNavigate , useLocation} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCategorySubjectsDetails, getSubjectsDetails } from '../Actions/subjectAction'

const HomeScreen = () => {
  
  return (
    <div className='w-fill h-8vh flex justify-center items-center'>
      <p className='text-xl'>This is Home page...!</p>
    </div>
  )
}

export default HomeScreen