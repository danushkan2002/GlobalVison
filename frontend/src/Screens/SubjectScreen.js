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
    <div className='h-full md:px-0 mb-16 pt-14 lg:pt-16 px mt-50px'>
        {
          subjectLoading ?
          <Loader/> :
          subjectError ?
          <Message>{subjectError}</Message> :
          (
    
              
            <div  key={subject.id} className='bg-white shadow-base w-80 md:w-448 lg:w-512 h-28 lg:h-36 mx-auto shadow-m mb-7 lg:mb-8 rounded-xl flex'>
                <div className='my-auto h-fit w-full px-8'>
                    <div className='flex items-center'>
                        <p className='text-xl lg:text-2xl font-Heebo font-medium '>{subject.subject_name}</p>
                        <img className='h-10 w-10 rounded-full' src={subject.image}/>
                    </div>
                    <hr className='w-full border border-10 my-2'></hr>
                    <p className='text-2xl lg:text-4xl font-Heebo font-medium '>{subject.title}</p>
                </div>
            </div>
            )
          
        }
    </div>
  )
}

export default SubjectScreen


// <div>
//       {
//         subjectLoading ?
//         <Loader/> :
//         subjectError ?
//             <Message>{subjectError}</Message> :
//             (
//                 subject.subject_name
//             )
//       }
//       </div>