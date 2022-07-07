import React,{useState} from 'react'
import { createApplication } from '../Actions/applicationAction'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'

const ApplicationFormScreen = () => {
    const [student_name, setStudent_name] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [birth_year, setBirth_year] = useState('')
    const [distric, setDistric] = useState('')
    const [postal_code, setPostal_code] = useState('')

    const dispatch = useDispatch()
    const history = useNavigate()

    const applicationCreate = useSelector(state => state.applicationCreate)
    const {applicationLoading, applicationError, applicationSuccess } = applicationCreate

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createApplication(student_name, email, phone_number, parseInt(birth_year), distric, postal_code)) 
    }

  return (
    <div className='font-ms'>
      <p className='text-4xl px-5 mt-10'>Application</p>
      {
        applicationLoading ?
          (<Loader/>) :
          applicationError ? 
            (<Message>{applicationError}</Message>) :
            applicationSuccess ?
              (
                history('/')
              ) :
              (
                <form onSubmit={submitHandler}>
                  <input type={'text'} className='border my-5 mx-2' value={student_name} placeholder={'student_name'} onChange={(e) => setStudent_name(e.target.value) }></input>
                  <input type={'text'} className='border my-5 mx-2' value={email} placeholder={"email"} onChange={(e) => setEmail(e.target.value) }></input>

                  <input type={'text'} className='border my-5 mx-2' value={phone_number} placeholder={'phone_number'} onChange={(e) => setPhone_number(e.target.value) }></input>

                  <input type={'number'} className='border my-5 mx-2' value={birth_year}  placeholder={'birth_year'} onChange={(e) => setBirth_year(e.target.value) }>
                  </input>
                    
                  <input type={'number'} className='border my-5 mx-2' value={postal_code}  placeholder={'postal_code'} onChange={(e) => setPostal_code(e.target.value) }>
                  </input>

                  <input type={'text'} className='border my-5 mx-2' value={distric} placeholder={'distric'} onChange={(e) => setDistric(e.target.value) }></input>

                  
                  <button className='border px-4 bg-black text-white ' type={'submit'}>submit</button>
                </form>
              )
      }
      
    </div>
  )
}

export default ApplicationFormScreen


// {applicationLoading && <Loader/>}
//       {applicationError && <Message>{applicationError}</Message>}
//       <form onSubmit={submitHandler}>
//             <input type={'text'} className='border my-5 mx-2' value={student_name} placeholder={'student_name'} onChange={(e) => setStudent_name(e.target.value) }></input>
//             <input type={'text'} className='border my-5 mx-2' value={email} placeholder={"email"} onChange={(e) => setEmail(e.target.value) }></input>

//             <input type={'text'} className='border my-5 mx-2' value={phone_number} placeholder={'phone_number'} onChange={(e) => setPhone_number(e.target.value) }></input>

//             <input type={'number'} className='border my-5 mx-2' value={birth_year}  placeholder={'birth_year'} onChange={(e) => setBirth_year(e.target.value) }>
//             </input>
               
//             <input type={'number'} className='border my-5 mx-2' value={postal_code}  placeholder={'postal_code'} onChange={(e) => setPostal_code(e.target.value) }>
//             </input>

//             <input type={'text'} className='border my-5 mx-2' value={distric} placeholder={'distric'} onChange={(e) => setDistric(e.target.value) }></input>

            
//             <button className='border px-4 bg-black text-white ' type={'submit'}>submit</button>
//       </form>
      

// <div>
//         <form onSubmit={submitHandler}>
//             <input type={'text'} className='border my-5 mx-2' value={student_name} placeholder={'student_name'} onChange={(e) => setStudent_name(e.target.value) }></input>
//             <input type={'text'} className='border my-5 mx-2' value={email} placeholder={"email"} onChange={(e) => setEmail(e.target.value) }></input>

//             <input type={'text'} className='border my-5 mx-2' value={phone_number} placeholder={'phone_number'} onChange={(e) => setPhone_number(e.target.value) }></input>

//             <input type={'number'} className='border my-5 mx-2' value={birth_year}  placeholder={'birth_year'} onChange={(e) => setBirth_year(e.target.value) }>
//             </input>
                
//             <input type={'text'} className='border my-5 mx-2' value={distric} placeholder={'distric'} onChange={(e) => setDistric(e.target.value) }></input>

            
//             <button className='border px-4 bg-black text-white ' type={'submit'}>submit</button>
//         </form>
    
//     </div>