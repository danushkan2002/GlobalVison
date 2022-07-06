import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Actions/userAction'
import { getUserDetails } from '../Actions/userAction'


const Navbar = () => {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin 
    
    const userDetails = useSelector(state => state.userDetails)
    const { user } = userDetails
    
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
            { user ? (
                
                    (user.is_admin) ? (
                        <div>
                            <button className='px-2' onClick={logoutHandler}> Logout</button>
                            <span>|</span>
                            <Link className='px-2' to={'/profile'}>Profile </Link>
                            <span>|</span>
                            <Link className='px-2' to={'/profile'}>UsersList </Link>
                            <span>|</span>
                            <Link className='px-2' to={'/profile'}>Notifications </Link>
                            <span>|</span>
                            <Link className='px-2' to={'/register'}> Register</Link>
                        </div>
                    ) : (
                        <div>
                            <button className='px-2' onClick={logoutHandler}> Logout</button>
                            <span>|</span>
                            <Link className='px-2' to={'/profile'}>Profile</Link>
                            <span>|</span>
                            <Link className='px-2' to={'/learn'}>Learn</Link>
                        </div>
                    )
                ) : (
                <div>
                <Link className='px-2' to={'/login'}> login</Link>
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