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
    <div>
    {
      coursesLoading ?
      <Loader/> :
      coursesError ? 
          <Message>{coursesError}</Message> :
          (
            courses.map((course) => (
                  <div key={course.id} className="m-10 border">
                      <Link to={`/courses/${course.id}`} className='text-xl'>{course.course_id}</Link>
                  </div>
              ))
          )
    }
  
    </div>
  )
}

export default CoursesScreen