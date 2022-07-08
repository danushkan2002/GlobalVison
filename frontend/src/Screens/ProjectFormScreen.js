import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'
import { createProject } from '../Actions/aboutAction'

const ProjectFormScreen = () => {
  const [content, setContent] = useState('')
    const [place_name, setPlace_name] = useState('')

    const dispatch = useDispatch()
    const history = useNavigate()

    const projectCreateData = useSelector(state => state.projectCreateData)
    const {projectLoading, projectError, projectSuccess } = projectCreateData

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProject(content, place_name)) 
    } 

  return (
    <div className='font-ms'>
    <p className='text-4xl px-5 mt-10'>Add Project</p>
    {
      projectLoading ?
        (<Loader/>) :
        projectError ? 
          (<Message>{projectError}</Message>) :
          projectSuccess ?
           (
              history('/')
            ) :
            (
              <form onSubmit={submitHandler}>

                <input type={'text'} className='border my-5 mx-2' value={content} placeholder={'content'} onChange={(e) => setContent(e.target.value) }></input>

                <input type={'text'} className='border my-5 mx-2' value={place_name} placeholder={'place_name'} onChange={(e) => setPlace_name(e.target.value) }></input>

                <button className='border px-4 bg-black text-white ' type={'submit'}>submit</button>
              </form>
            )
    }
  </div>
  )
}

export default ProjectFormScreen