import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCourses } from '../Actions/courseAction'
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'
import { Link } from 'react-router-dom'

const CoursesScreen = () => {
  const dispatch = useDispatch()
  
  const coursesData = useSelector(state => state.coursesData)
  const {coursesLoading, coursesError,courses } = coursesData
  
  useEffect(() => {
    dispatch(getCourses())
  },[dispatch])
  
  return (
    <div className='h-full md:px-0 mb-16 pt-14 lg:pt-16 px mt-50px'>
        {
          coursesLoading ?
          <Loader/> :
          coursesError ?
          <Message>{coursesError}</Message> :
          (
            courses.map((course) => (
              
            <div key={course.id} className='bg-white shadow-base w-80 md:w-448 lg:w-512 h-28 lg:h-36 mx-auto shadow-m mb-7 lg:mb-8 rounded-xl flex'>
                <div className='my-auto h-fit w-full px-8'>
                    <p className='text-xl lg:text-2xl font-Heebo font-medium '>{course.course_name}</p>
                    <hr className='w-full border border-10 my-2'></hr>
                    <p className='font-Qu text-sm lg:text-md font-medium text-gray-800'>Course duration {course.course_duration_in_month_count} months</p>
                    <p className='text-right font-Qu text-gray-600 mt-4  text-xs lg:text-sm'>Stating from 2021/01/05</p>
                </div>
            </div>
            ))
          )
        }
    </div>
  )
}

export default CoursesScreen


// <div>
//     {
//       coursesLoading ?
//       <Loader/> :
//       coursesError ? 
//           <Message>{coursesError}</Message> :
//           (
//             courses.map((course) => (
//                   <div key={course.id} className="m-10 border">
//                       <Link to={`/courses/${course.id}`} className='text-xl'>{course.course_id}</Link>
//                   </div>
//               ))
//           )
//     }
  
//     </div>