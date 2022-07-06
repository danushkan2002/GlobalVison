import React ,{ useEffect} from 'react'
import { useParams  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import {  getSubject } from '../Actions/subjectAction';
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'

const SubjectScreen = () => {
    const {cat} = useParams()
    const {id} = useParams()
    const dispatch = useDispatch()

    const subjectByCategory = useSelector(state => state.subjectByCategory)
    const { subject, subjectLoading, subjectError } = subjectByCategory

    useEffect(() => {
      dispatch(getSubject(cat,id))
    },[cat, dispatch, id])
  return (

    <div>
      {
        subjectLoading ?
        <Loader/> :
        subjectError ?
            <Message>{subjectError}</Message> :
            (
                subject.subject_name
            )
      }
      </div>
  )
}

export default SubjectScreen