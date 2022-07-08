import React,{ useEffect} from 'react'
import { getResult } from '../Actions/resultAction'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Loader from '../Componets/Loader'
import { useParams  } from 'react-router-dom'
import Message from '../Componets/Message'

const ResultScreen = () => {
  const {id} = useParams()
  
  const dispatch = useDispatch()

  const resultData = useSelector(state => state.resultData)
  const {resultLoading, resultError,result } = resultData

  useEffect(() => {
    dispatch(getResult(id))
  },[dispatch, id])

  return (
    <div> 
    {
      resultLoading ?
      <Loader/> :
      resultError ?
          <Message>{resultError}</Message> :

          (
            result.student_id
          )
    }
    </div>
  )
}

export default ResultScreen