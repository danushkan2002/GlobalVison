import React,{ useEffect, useState} from 'react'
import { getResult } from '../Actions/resultAction'
import { useDispatch, useSelector } from 'react-redux/es/exports';

import { HiSearch } from 'react-icons/hi'


const ResultScreen = () => {
 

  const [studentID, setStudentID] = useState('')
  
  const dispatch = useDispatch()

  const resultData = useSelector(state => state.resultData)
  const {resultLoading, resultError,result } = resultData

  useEffect(() => {
    dispatch(getResult())
  },[dispatch])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(getResult(studentID))
  }

  return (

    <div className='bg-30 md:px-0 h-10vh'>
      <div className='pt-75px h-full w-full md:px-14 lg:px-28 xl:px-32 pb-100px bg-30'>
        <div className='lg:flex h-fit lg:h-28 items-center '>
            <form onSubmit={submitHandler} className='flex items-center px-5 h-10 w-80  bg-white rounded-md my-75px lg:my-0 mx-auto lg:mx-0'>
              <input value={studentID} onChange={(e) => setStudentID(e.target.value)}  className='outline-none bg-transparent font-Qu text-w-text' placeholder='ID'></input>
              
              <button type='submit' className='ml-auto'> <HiSearch  className='text-black ml-auto text-2xl'/></button>
            </form>
            {
              result ?
              (
                <div className='lg:ml-auto w-72 h-16 flex items-center mx-auto lg:mx-0'>
                  <div className='ml-auto'>
                  <p className='text-white font-Heebo text-m-simple-title lg:text-w-simple-title'>#{result.student_id}</p>
                    <hr className='border-10'></hr>
                    
                  </div>
                  
                </div>
              ) : (
                ''
              )
            }

            

        </div>
        {
          resultLoading?
          (
            ''
          ) : resultError ?
          (
            ''
          ) :
          result ?
          (
            <div>
                <div className='mt-50px px-25px'>
                  <div className='flex items-center my-12.5px'>
                    <div>
                      <p className='font-Qu text-m-text lg:text-w-text text-white'>Vocabulary</p>
                    </div>
                    <div className='ml-auto flex items-center'>
                      <p className=' mx-3 text-white font-Qu text-m-text lg:text-w-text'>{result.vocabulary}</p>
                      <div style={{width:result.vocabulary}} className={`w-${toString(result.writing)}px  h-25px bg-10`}></div>
                    </div>
                  </div>
                  <div className='flex items-center my-12.5px'>
                    <div>
                      <p className='font-Qu text-m-text lg:text-w-text text-white'>Writing</p>
                    </div>
                    <div className='ml-auto flex items-center'>
                      <p className=' mx-3 text-white font-Qu text-m-text lg:text-w-text'>{result.writing}</p>
                      <div style={{width:result.writing}} className={`w-${result.vocabulary}px h-25px bg-10`}></div>
                    </div>
                  </div>
                  <div className='flex items-center my-12.5px'>
                    <div>
                      <p className='font-Qu text-m-text lg:text-w-text text-white'>Lisining and Speaking</p>
                    </div>
                    <div className='ml-auto flex items-center'>
                      <p className=' mx-3 text-white font-Qu text-m-text lg:text-w-text'>{result.speaking_and_listening}</p>
                      <div style={{width:result.speaking_and_listening}} className={`w-${result.vocabulary}px h-25px bg-10`}></div>
                    </div>
                  </div>
                  <div className='flex items-center my-12.5px'>
                    <div>
                      <p className='font-Qu text-m-text lg:text-w-text text-white'>Grammar</p>
                    </div>
                    <div className='ml-auto flex items-center'>
                      <p className=' mx-3 text-white font-Qu text-m-text lg:text-w-text'>{result.grammar}</p>
                      <div style={{width:result.grammar}} className={`w-${result.vocabulary}px h-25px bg-10`}></div>
                    </div>
                  </div>
                  <div className='flex items-center my-12.5px'>
                    <div>
                      <p className='font-Qu text-m-text lg:text-w-text text-white'>Reading</p>
                    </div>
                    <div className='ml-auto flex items-center'>
                      <p className=' mx-3 text-white font-Qu text-m-text lg:text-w-text'>{result.reading}</p>
                      <div style={{width:result.reading}} className={`w-${result.vocabulary}px h-25px bg-10`}></div>
                    </div>
                  </div>
            </div>
            <div className='my-25px flex px-25px'>
              <p className='text-white text-w-simple-title'>Total</p>
              <p className='text-white text-w-simple-title ml-auto text-right'>{result.total}</p>
            </div>
            </div>
          ) : (
            ''
          )
        }
      </div>
    </div>
   
  )
}

export default ResultScreen



// <div> 
// {
//   resultLoading ?
//   <Loader/> :
//   resultError ?
//       <Message>{resultError}</Message> :

//       (
//         result.student_id
//       )
// }
// </div>