import React, {useState, useEffect} from 'react'
import { register } from '../Actions/userAction'
import { getSchoolDetails } from '../Actions/getAction'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'

const RegisterScreen = () => {
  const [username, setUsername] = useState('')
  const [birth_year, setBirth_year] = useState('')
  const [student_id, setStudent_id] = useState('')
  const [school_name, setSchool_name] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [load, setLoad] = useState(true)
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()

  const history = useNavigate()

  const userRegister = useSelector(state => state.userRegister)
  const {loading, error } = userRegister

  const schoolData = useSelector(state => state.schoolData)
  const {schoolLoading, schoolError , school} = schoolData

  useEffect(() => {
    if (load)  {
      dispatch(getSchoolDetails('get/school'))
      setLoad(false)
    } else {

    }
  },[dispatch, load])
    

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(username, parseInt(birth_year), student_id , school_name, phone_number, password)) 
      history('/')
    }
    
  }
  return (
    <div className='font-ms'>
      <p className='text-4xl px-5 mt-10'>Register</p>
      {loading && <Loader/>}
      {message && <Message>{message}</Message>}
      {error && <Message>{error}</Message>}
      {
        schoolLoading ?
          (<Loader/>) :
          schoolError ? 
            (<Message>{schoolError}</Message>) :
              (
                <form onSubmit={submitHandler}>
                    <input type={'text'} className='border my-5 mx-2' value={username} placeholder={'Username'} onChange={(e) => setUsername(e.target.value) }></input>
                    <input type={'number'} className='border my-5 mx-2' value={birth_year} placeholder={"Birthday Year"} onChange={(e) => setBirth_year(e.target.value) }></input>
                    <input type={'text'} className='border my-5 mx-2' value={student_id} placeholder={'student_id'} onChange={(e) => setStudent_id(e.target.value) }></input>
                    <select className='border my-5 mx-2' value={school_name} onChange={(e) => setSchool_name(e.target.value) }>
                            <option defaultValue={true}>select somethio</option>
                            { 
                              school.map((school) => (
                                <option key={school.id} value={school.school_name}>{school.school_name}</option>))
                            }
                          </select>
                          
                    <input type={'text'} className='border my-5 mx-2' value={phone_number} placeholder={'Phone number'} onChange={(e) => setPhone_number(e.target.value) }></input>
                    <input type={'password'} className='border my-5 mx-2' value={password} placeholder={"Password"} onChange={(e) => setPassword(e.target.value) }></input>
                    <input type={'password'} className='border my-5 mx-2' value={confirmPassword} placeholder={"Confirm Password"} onChange={(e) => setConfirmPassword(e.target.value) }></input>


                    
                    <button className='border px-4 bg-black text-white ' type={'submit'}>submit</button>
                </form>
              )
      }
        
    </div>
  )
}

export default RegisterScreen