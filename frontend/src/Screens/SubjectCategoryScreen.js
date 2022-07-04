import React ,{ useEffect} from 'react'
import { useParams  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getCategorySubjectsDetails } from '../Actions/subjectAction';
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'

const SubjectCategoryScreen = () => {
    let {cat} = useParams();
    
    const categorySubjectDetails = useSelector(state => state.categorySubjectDetails)
    const { categorySubjects , categorySubjectsLoading, categorySubjectsError } = categorySubjectDetails

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCategorySubjectsDetails(cat))
    },[dispatch, cat])
  
  return (
    <div>
    {
        categorySubjectsLoading ?
        <Loader/> :
        categorySubjectsError ?
            <Message>{categorySubjectsError}</Message> :
            (
                categorySubjects.map((subject) => (
                    <div key={subject.id} className="m-10 border">
                        <p className='text-xl'>{subject.subject_name}</p>
                        {subject.grade.age}
                    </div>
                ))
            )
    }
    </div>
  )
}

export default SubjectCategoryScreen