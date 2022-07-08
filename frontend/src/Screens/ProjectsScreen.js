import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProjects } from '../Actions/aboutAction'
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'
import { Link } from 'react-router-dom'

const ProjectsScreen = () => {
  const dispatch = useDispatch()
  
  const projectsData = useSelector(state => state.projectsData)
  const {projectsLoading, projectsError,projects } = projectsData
  
  useEffect(() => {
    dispatch(getProjects())
  },[dispatch])
  
  return (
    <div>
    {
      projectsLoading ?
      <Loader/> :
      projectsError ? 
          <Message>{projectsError}</Message> :
          (
            projects.map((project) => (
                  <div key={project.id} className="m-10 border">
                      <Link to={`/projects/${project.id}`} className='text-xl'>{project.content}</Link>
                  </div>
              ))
          )
    }
  
    </div>
  )
}

export default ProjectsScreen