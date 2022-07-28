import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { Link } from 'react-router-dom'
import { getSubjectCategory } from '../Actions/getAction'
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'

const SubjectsScreen = () => {
    const dispatch = useDispatch()

    const subjectCategory = useSelector(state => state.subjectCategory)
    const { subjectsCategories, subjectsCategoriesLoading, subjectsCategoriesError } = subjectCategory

    useEffect(()=> {
        dispatch(getSubjectCategory())
      }, [dispatch])
  return (
    <div className='h-full md:px-0 mb-16 pt-14 lg:pt-16 px mt-50px'>
        {
          subjectsCategoriesLoading ?
          <Loader/> :
          subjectsCategoriesError ?
          <Message>{subjectsCategoriesError}</Message> :
          (
            subjectsCategories.map((subject) => (
              
            <Link to={`/learn/${subject.category}`}  key={subject.id} className='bg-white shadow-base w-80 md:w-448 lg:w-512 h-28 lg:h-36 mx-auto shadow-m mb-7 lg:mb-8 rounded-xl flex'>
                <div className='my-auto h-fit w-full px-8'>
                    <p className='text-xl lg:text-2xl font-Heebo font-medium '>{subject.category}</p>
                    <hr className='w-full border border-10 my-2'></hr>
                    
                </div>
            </Link>
            ))
          )
        }
    </div>
  )
}

export default SubjectsScreen














// <div>
//     {
//         subjectsCategoriesLoading ?
//         <Loader/> :
//             subjectsCategoriesError ?
//             <Message>{subjectsCategoriesError}</Message> :
//             (
//                 subjectsCategories.map((subject) => (
//                     <div key={subject.id} className="m-10 border">
//                         <Link to={`/learn/${subject.category}`} className='text-xl'>{subject.category}</Link>
//                     </div>
//                 ))
//             )
//     }
//     </div>





// {
//     subjectsLoading ?
//     <Loader/> :
//         subjectsError ?
//         <Message>{subjectsError}</Message> :
//         (
//             subjects.map((subject) => (
//                 <div key={subject.id} className="m-10 border">
//                     <Link to={`/learn/${subject.category.category}`} className='text-xl'>{subject.subject_name}</Link>
//                     {subject.grade.age}
//                 </div>
//             ))
//         )
// }