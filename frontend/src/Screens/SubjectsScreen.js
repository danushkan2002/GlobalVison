import React ,{ useEffect} from 'react'
import { useParams , Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getSubjects } from '../Actions/subjectAction';
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'

const SubjectByCategoryScreen = () => {
    let {cat} = useParams();
    
    const subjectsByCategory = useSelector(state => state.subjectsByCategory)
    const { subjects , subjectsLoading, subjectsError } = subjectsByCategory

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getSubjects(cat))
    },[dispatch, cat])
  
  return (
    <div className='h-full md:px-0 mb-16 pt-14 lg:pt-16 px mt-50px'>
        {
          subjectsLoading ?
          <Loader/> :
          subjectsError ?
          <Message>{subjectsError}</Message> :
          (
            subjects.map((subject) => (
              
            <Link to={`/learn/${cat}/${subject.id}`}  key={subject.id} className='bg-white shadow-base w-80 md:w-448 lg:w-512 h-28 lg:h-36 mx-auto shadow-m mb-7 lg:mb-8 rounded-xl flex'>
                <div className='my-auto h-fit w-full px-8'>
                    <div className='flex items-center'>
                        <p className='text-xl lg:text-2xl font-Heebo font-medium '>{subject.subject_name}</p>
                        <p className='text-lg lg:text-xl font-Heebo font-medium ml-auto'>{subject.part_number}</p>
                    </div>
                    <hr className='w-full border border-10 my-2'></hr>
                    <p className='text-2xl lg:text-4xl font-Heebo font-medium '>{subject.title}</p>
                </div>
            </Link>
            ))
          )
        }
    </div>
  )
}

export default SubjectByCategoryScreen








// <div>
//     {
//         subjectsLoading ?
//         <Loader/> :
//             subjectsError ?
//             <Message>{subjectsError}</Message> :
//             (
//                 subjects.map((subject) => (
//                     <div key={subject.id} className="m-10 border">
//                         <Link to={`${subject.id}`} className='text-xl'>{subject.subject_name}</Link>
//                         {subject.grade.age}
//                     </div>
//                 ))
//             )
//     }
//     </div>