import React,{ useEffect} from 'react'
import { getProject } from '../Actions/aboutAction'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Loader from '../Componets/Loader'
import { useParams  } from 'react-router-dom'
import Message from '../Componets/Message'

const ProjectScreen = () => {
  const {id} = useParams()
  
  const dispatch = useDispatch()

  const projectData = useSelector(state => state.projectData)
  const {projectLoading, projectError,project } = projectData
  
  useEffect(() => { 
    dispatch(getProject(id))
  },[dispatch, id])
  return (
    <div>
    {
      projectLoading ?
      <Loader/> :
      projectError ?
          <Message>{projectError}</Message> :

          (
            project.content
          )
    }
    </div>
  )
}

export default ProjectScreen