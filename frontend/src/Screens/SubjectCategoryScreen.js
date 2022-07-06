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
    <div>
    {
        subjectsCategoriesLoading ?
        <Loader/> :
            subjectsCategoriesError ?
            <Message>{subjectsCategoriesError}</Message> :
            (
                subjectsCategories.map((subject) => (
                    <div key={subject.id} className="m-10 border">
                        <Link to={`/learn/${subject.category}`} className='text-xl'>{subject.category}</Link>
                    </div>
                ))
            )
    }
    </div>
  )
}

export default SubjectsScreen


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