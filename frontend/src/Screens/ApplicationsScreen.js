import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getApplications } from '../Actions/applicationAction'
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'
import { Link } from 'react-router-dom'

const ApplicationsScreen = () => {
  const dispatch = useDispatch()
  
  const applicationsData = useSelector(state => state.applicationsData)
  const {applicationsLoading, applicationsError,applications } = applicationsData

  useEffect(() => {
    dispatch(getApplications())
  },[dispatch])

  return (
    <div>
      {
        applicationsLoading ?
        <Loader/> :
        applicationsError ?
            <Message>{applicationsError}</Message> :
            (
              applications.map((application) => (
                    <div key={application.id} className="m-10 border">
                        <Link to={`/applications/${application.id}`} className='text-xl'>{application.email}</Link>
                    </div>
                ))
            )
      }
    
    </div>
  )
}

export default ApplicationsScreen