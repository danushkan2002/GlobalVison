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
    <div>
    {
        subjectsLoading ?
        <Loader/> :
        subjectsError ?
            <Message>{subjectsError}</Message> :
            (
                subjects.map((subject) => (
                    <div key={subject.id} className="m-10 border">
                        <Link to={`${subject.id}`} className='text-xl'>{subject.subject_name}</Link>
                        {subject.grade.age}
                    </div>
                ))
            )
    }
    </div>
  )
}

export default SubjectByCategoryScreen