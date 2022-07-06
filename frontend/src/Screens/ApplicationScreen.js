import React,{ useEffect} from 'react'
import { getApplication } from '../Actions/applicationAction'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Loader from '../Componets/Loader'
import { useParams  } from 'react-router-dom'
import Message from '../Componets/Message'

const ApplicationScreen = () => {
  const {id} = useParams()
  
  const dispatch = useDispatch()

  const applicationData = useSelector(state => state.applicationData)
  const {applicationLoading, applicationError,application } = applicationData

  useEffect(() => {
    dispatch(getApplication(id))
  },[dispatch, id])

  return (
    <div>
    {
      applicationLoading ?
      <Loader/> :
      applicationError ?
          <Message>{applicationError}</Message> :

          (
            application.email
          )
    }
    </div>
  )
}

export default ApplicationScreen