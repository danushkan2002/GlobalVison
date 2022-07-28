import React, {useState, useEffect} from 'react'
import { register } from '../Actions/userAction'
import { getSchoolDetails } from '../Actions/getAction'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'
import { HiChevronDown } from 'react-icons/hi'


const RegisterScreen = () => {

  const [ usertype , setUsertype] = useState(false)
  const [ birthdayYear , setBirthdaYear] = useState(false)

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
      setUsertype(false)
      setBirthdaYear(false)
    } else {
      setUsertype(false)
      setBirthdaYear(false)
    }
  },[dispatch, load, setUsertype, setBirthdaYear])
    

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(username, parseInt(birth_year), student_id , school_name, phone_number, password)) 
      history('/')
    }
    
  }

  const SchoolTypeHandler = () => {
    if (birthdayYear)  {
      setBirthdaYear(!birthdayYear)
      setUsertype(!usertype)
    } else {
      setUsertype(!usertype)
    }
  }
  
  const Birthyearhandler = () => {
    if (usertype)  {
      setBirthdaYear(!birthdayYear)
      setUsertype(!usertype)
    } else {
      setBirthdaYear(!birthdayYear)
    }

  }

  return (
    <form onSubmit={submitHandler} className='px-5 md:px-28 flex justify-center mt-75px'>
        <div className='h-fit mt-7 md:mt-14 lg:mt-1vh pb-28'>
          <p className='text-3xl font-bold tracking-wide uppercase xl:mx-10'>Create Account</p>
          <div  className='xl:grid xl:grid-rows-3 xl:grid-cols-2'>
            <div className='xl:mx-10'>
              <input type={'text'} className='bg-white mt-7 h-12 flex text-sm  w-80 lg:w-96 rounded-md px-7 shadow-input outline-none text-m-text font-Qu lg:text-w-text' value={username} placeholder={'Username'} onChange={(e) => setUsername(e.target.value) } ></input>
            </div>

            <div className={
              usertype?
              (
                'shadow-input h-fit rounded-md absolute bg-white overflow-hidden w-80 mt-7 lg:w-96 xl:mx-10'
              ) : (
                'shadow-input h-12 rounded-md bg-white overflow-hidden w-80 mt-7 lg:w-96 xl:mx-10'
              )
            } value={school_name} onChange={(e) => setSchool_name(e.target.value) }>
              <div className='h-12 flex items-center'>
                <p className='px-7 text-gray-400 text-m-text font-Qu lg:text-w-text'>School Name</p>
                <HiChevronDown onClick={SchoolTypeHandler} className='ml-auto mx-7'/>
              </div>
              
              
              {
                school.map((school =>(
                  <div className='flex items-center my-5'>
                    <input type={'radio'} key={school.id} value={school.school_name} onClick={SchoolTypeHandler} className='ml-7 h-3 hover:bg-black '></input>
                    <label className='text-m-text font-Qu lg:text-w-text ml-2' for={school.id}>{school.school_name}</label><br></br>
                  </div>
                )))
              }
            </div>

            <div className='xl:mx-10'>
              <input type={'text'} className='bg-white mt-7 h-12 text-sm flex text-m-text font-Qu lg:text-w-text w-80 lg:w-96 rounded-md px-7 shadow-input outline-none' value={student_id} placeholder={'student_id'} onChange={(e) => setStudent_id(e.target.value)}></input>
            </div>

            <div  className={
              birthdayYear?
              (
                'shadow-input h-fit rounded-md absolute bg-white overflow-hidden w-80 mt-7 lg:w-96 xl:mx-10'
              ) : (
                'shadow-input h-12 rounded-md bg-white overflow-hidden w-80 mt-7 lg:w-96 xl:mx-10'
              )
            } value={birth_year} onChange={(e) => setBirth_year(e.target.value)} >
              <div className='h-12 flex items-center'>
                <p className='px-7 text-gray-400 text-sm text-m-text font-Qu lg:text-w-text'>Birth year</p>
                <HiChevronDown onClick={Birthyearhandler} className='ml-auto mx-7 '/>
              </div>
              
              <div className='animate-swipeDown'>
                <div className='flex items-center my-5'>
                <input type={'radio'} onClick={Birthyearhandler} key={2001} value={2001}  className='ml-7 h-3 hover:bg-black' placeholder='Password'></input>
                <label className='text-m-text font-Qu lg:text-w-text ml-2' for="2001">2001</label><br></br>
              </div>
              <div className='flex items-center my-5'>
                <input type={'radio'} onClick={Birthyearhandler} key={2002} value={2002} className='ml-7 h-3 hover:bg-black'></input>
                <label className='text-m-text font-Qu lg:text-w-text ml-2' for="2002">2002</label><br></br>
              </div>
              <div className='flex items-center my-5'>
                <input type={'radio'} onClick={Birthyearhandler} name='usertype' key={2003} value={2003} className='ml-7 h-3 hover:bg-black' placeholder='Password'></input>
                <label className='text-m-text font-Qu lg:text-w-text ml-2' for="2003">2003</label><br></br>
              </div>
              <div className='flex items-center my-5'>
                <input type={'radio'} onClick={Birthyearhandler} name='usertype' key={2004} value={2004} className='ml-7 h-3 hover:bg-black' placeholder='Password'></input>
                <label className='text-m-text font-Qu lg:text-w-text ml-2' for="2004">2004</label><br></br>
              </div>
              </div>
            </div>

            <div className='xl:mx-10'>
              <input type={'Password'} className='bg-white mt-7 h-12 flex text-sm  text-m-text font-Qu lg:text-w-text w-80 lg:w-96 rounded-md px-7 shadow-input outline-none text-' value={password} placeholder={"Password"} onChange={(e) => setPassword(e.target.value) }></input>
            </div>

           <div className='xl:mx-10'>
            <input type={'password'} className='bg-white mt-7 h-12 text-sm flex text-m-text font-Qu lg:text-w-text w-80 lg:w-96 rounded-md px-7 shadow-input outline-none' value={confirmPassword} placeholder={"Confirm Password"} onChange={(e) => setConfirmPassword(e.target.value) }></input>
           </div>
            
          </div>
          
        </div>
        <button type={'submit'} className='bg-30 hover:text-10 h-12 text-sm font-Heebo w-80 lg:w-96 rounded-md fixed bottom-7 md:bottom-14 text-white mt-56'>Register</button>
    </form>
  )
}

export default RegisterScreen


// <div className='font-ms'>
//       <p className='text-4xl px-5 mt-10'>Register</p>
//       {loading && <Loader/>}
//       {message && <Message>{message}</Message>}
//       {error && <Message>{error}</Message>}
//       {
//         schoolLoading ?
//           (<Loader/>) :
//           schoolError ? 
//             (<Message>{schoolError}</Message>) :
//               (
//                 <form onSubmit={submitHandler}>
//                     <input type={'text'} className='border my-5 mx-2' value={username} placeholder={'Username'} onChange={(e) => setUsername(e.target.value) }></input>
//                     <input type={'number'} className='border my-5 mx-2' value={birth_year} placeholder={"Birthday Year"} onChange={(e) => setBirth_year(e.target.value) }></input>
//                     <input type={'text'} className='border my-5 mx-2' value={student_id} placeholder={'student_id'} onChange={(e) => setStudent_id(e.target.value) }></input>
//                     <select className='border my-5 mx-2' value={school_name} onChange={(e) => setSchool_name(e.target.value) }>
//                             <option defaultValue={true}>select somethio</option>
//                             { 
//                               school.map((school) => (
//                                 <option key={school.id} value={school.school_name}>{school.school_name}</option>))
//                             }
//                           </select>
                          
//                     <input type={'text'} className='border my-5 mx-2' value={phone_number} placeholder={'Phone number'} onChange={(e) => setPhone_number(e.target.value) }></input>
//                     <input type={'password'} className='border my-5 mx-2' value={password} placeholder={"Password"} onChange={(e) => setPassword(e.target.value) }></input>
//                     <input type={'password'} className='border my-5 mx-2' value={confirmPassword} placeholder={"Confirm Password"} onChange={(e) => setConfirmPassword(e.target.value) }></input>


                    
//                     <button className='border px-4 bg-black text-white ' type={'submit'}>submit</button>
//                 </form>
//               )
//       }
        
//     </div>