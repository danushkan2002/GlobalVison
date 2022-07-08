import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getResults } from '../Actions/resultAction'
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'
import { Link } from 'react-router-dom'

const ResultsScreen = () => {
  const dispatch = useDispatch()
  
  const resultsData = useSelector(state => state.resultsData)
  const {resultsLoading, resultsError,results } = resultsData
  
  useEffect(() => {
    dispatch(getResults())
  },[dispatch])
  
  return (
    <div>
    <Link className='border px-5 py-2 m-10 bg-black text-white' to={'/add_result/'}>Add result</Link>
    {
      resultsLoading ?
      <Loader/> :
      resultsError ? 
          <Message>{resultsError}</Message> :
          (
            results.map((result) => (
                  <div key={result.id} className="m-10 border">
                      <Link to={`/result/${result.id}`} className='text-xl'>{result.student_id}</Link>
                  </div>
              ))
          )
    }
  
    </div>
  )
}

export default ResultsScreen