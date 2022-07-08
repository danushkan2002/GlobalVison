import React,{useState} from 'react'
import { createCourse } from '../Actions/courseAction'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'

const CourseFromScreen = () => {
  const [course_name, setCourse_name] = useState('')
    const [course_duration_in_month_count, setCourse_duration_in_month_count] = useState('')
    const [course_id, setCourse_id] = useState('')
    const [starting_month, setStarting_month] = useState('')
    const [starting_date, setStarting_date] = useState('')


    const dispatch = useDispatch()
    const history = useNavigate()

    const courseCreateData = useSelector(state => state.courseCreateData)
    const {courseLoading, courseError, courseSuccess } = courseCreateData

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createCourse(course_name, course_duration_in_month_count, course_id,starting_month, starting_date)) 
    }

  return (
    <div className='font-ms'>
      <p className='text-4xl px-5 mt-10'>Add result</p>
      {
        courseLoading ?
          (<Loader/>) :
          courseError ? 
            (<Message>{courseError}</Message>) :
            courseSuccess ?
             (
                history('/')
              ) :
              (
                <form onSubmit={submitHandler}>

                  <input type={'text'} className='border my-5 mx-2' value={course_name} placeholder={'course_name'} onChange={(e) => setCourse_name(e.target.value) }></input>

                  <input type={'text'} className='border my-5 mx-2' value={course_id} placeholder={"course_id"} onChange={(e) => setCourse_id(e.target.value) }></input>

                  <input type={'text'} className='border my-5 mx-2' value={course_duration_in_month_count} placeholder={'course_duration_in_month_count'} onChange={(e) => setCourse_duration_in_month_count(e.target.value) }></input>

                  <input type={'number'} className='border my-5 mx-2' value={starting_month}  placeholder={'starting_month'} onChange={(e) => setStarting_month(e.target.value) }>
                  </input>
                    
                  <input type={'number'} className='border my-5 mx-2' value={starting_date}  placeholder={'starting_date'} onChange={(e) => setStarting_date(e.target.value) }>
                  </input>

                  <button className='border px-4 bg-black text-white ' type={'submit'}>submit</button>
                </form>
              )
      }
    </div>
  )
}

export default CourseFromScreen