import React,{useState} from 'react'
import { createApplication } from '../Actions/applicationAction'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'


const ResultFormScreen = () => {
  const [student_id, setStudent_id] = useState('')
    const [course_id, setCourse_id] = useState('')
    const [vocabulary, setVocabulary] = useState('')
    const [grammar, setGrammar] = useState('')
    const [speaking_and_listening, setSpeaking_and_listening] = useState('')
    const [writing, setWriting] = useState('')
    const [reading, setReading] = useState('')

    const dispatch = useDispatch()
    const history = useNavigate()

    const resultCreateData = useSelector(state => state.resultCreateData)
    const {resultLoading, resultError, resultSuccess } = resultCreateData

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createApplication(student_id, course_id, vocabulary, grammar, speaking_and_listening, writing, reading)) 
    }

  return (
    <div className='font-ms'>
      <p className='text-4xl px-5 mt-10'>Add result</p>
      {
        resultLoading ?
          (<Loader/>) :
          resultError ? 
            (<Message>{resultError}</Message>) :
            resultSuccess ?
             (
                history('/')
              ) :
              (
                <form onSubmit={submitHandler}>
                  <input type={'text'} className='border my-5 mx-2' value={student_id} placeholder={'student_id'} onChange={(e) => setStudent_id(e.target.value) }></input>
                  <input type={'text'} className='border my-5 mx-2' value={course_id} placeholder={"course_id"} onChange={(e) => setCourse_id(e.target.value) }></input>

                  <input type={'text'} className='border my-5 mx-2' value={vocabulary} placeholder={'vocabulary'} onChange={(e) => setVocabulary(e.target.value) }></input>

                  <input type={'number'} className='border my-5 mx-2' value={grammar}  placeholder={'grammar'} onChange={(e) => setGrammar(e.target.value) }>
                  </input>
                    
                  <input type={'number'} className='border my-5 mx-2' value={speaking_and_listening}  placeholder={'speaking_and_listening'} onChange={(e) => setSpeaking_and_listening(e.target.value) }>
                  </input>

                  <input type={'text'} className='border my-5 mx-2' value={writing} placeholder={'writing'} onChange={(e) => setWriting(e.target.value) }></input>

                  <input type={'text'} className='border my-5 mx-2' value={reading} placeholder={'reading'} onChange={(e) => setReading(e.target.value) }></input>
                  
                  <button className='border px-4 bg-black text-white ' type={'submit'}>submit</button>
                </form>
              )
      }
    </div>
  )
}

export default ResultFormScreen