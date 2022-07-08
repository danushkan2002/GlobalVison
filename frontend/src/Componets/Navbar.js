import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Actions/userAction'
import { getUserDetails } from '../Actions/userAction'
import Loader from './Loader'
import Message from './Message'


const Navbar = () => {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo, error, loading } = userLogin 
        
    const history = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
        history('/')
    }

    useEffect(() => {
        dispatch(getUserDetails())
    },[dispatch, userInfo])  
  return (
    <div className='flex font-bold text-xl px-5 py-5 bg-slate-200'>
        <div className='flex justify-start'>
            { 
                loading ?
                <Loader/> :
                    error ?
                    <Message>{error}</Message> :
                
                userInfo ? (
                    (userInfo.is_admin && userInfo.is_superadmin) ? (
                        <div>
                            <button className='px-2' onClick={logoutHandler}> Logout</button>
                            <span>|</span>
                            <Link className='px-2' to={'/profile/'}>Profile </Link>
                            <span>|</span>
                            <Link className='px-2' to={'/users/'}>UsersList </Link>
                            <span>|</span>
                            <Link className='px-2' to={'/profile/'}>Notifications </Link>
                            <span>|</span>
                            <Link className='px-2' to={'/register/'}> Register</Link>
                            <span>|</span>
                            <Link className='px-2' to={'/applications/'}> applications</Link>
                            <span>|</span>
                            <Link className='px-2' to={'/inbox/'}> Inbox</Link>
                            <span>|</span>
                            <Link className='px-2' to={'/results/'}> results</Link>
                            <span>|</span>
                            <Link className='px-2' to={'/add_course/'}> Add course</Link>
                        </div>
                    ) : (
                        <div>
                            <button className='px-2' onClick={logoutHandler}> Logout</button>
                            <span>|</span>
                            <Link className='px-2' to={'/profile/'}>Profile</Link>
                            <span>|</span>
                            <Link className='px-2' to={'/learn/'}>Learn</Link>
                            <span>|</span>
                            <Link className='px-2' to={'/review/'}>review</Link>
                        </div>
                    )
                ) : (
                <div>
                <Link className='px-2' to={'/login'}> login</Link>
                <span>|</span>
                <Link className='px-2' to={'/application'}>Application</Link>
                <span>|</span>
                <Link className='px-2' to={'/courses/'}>Courses</Link>
                </div>
                
            )}
        </div>
        <div className='ml-auto'>
                <Link to={'/'} className='font-bold text-xl '>Global vision</Link>
        </div>

        
    </div>

  )
}

export default Navbar