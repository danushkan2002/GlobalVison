import React,{ useEffect} from 'react'
import { getCourse } from '../Actions/courseAction'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Loader from '../Componets/Loader'
import { useParams  } from 'react-router-dom'
import Message from '../Componets/Message'

const CourseScreen = () => {
  const {id} = useParams()
  
  const dispatch = useDispatch()

  const courseData = useSelector(state => state.courseData)
  const {courseLoading, courseError,course } = courseData
  
  useEffect(() => {
    dispatch(getCourse(id))
  },[dispatch, id])

  return (
    <div>{
      courseLoading ?
      <Loader/> :
      courseError ?
          <Message>{courseError}</Message> :

          (
            course.course_name
          )
    }</div>
  )
}

export default CourseScreen