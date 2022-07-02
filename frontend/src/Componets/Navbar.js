import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../Actions/userAction'
import { getUserDetails } from '../Actions/userAction'


const Navbar = () => {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin 
    
    const userDetails = useSelector(state => state.userDetails)
    const { user } = userDetails
    
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    useEffect(() => {
        if (userInfo) {
          dispatch(getUserDetails('profile'))
        }
    },[dispatch, userInfo])  
  return (
    <div className='flex font-bold text-xl px-5 py-5 bg-slate-200'>
        <div className='flex justify-start'>
            { userInfo ? (
                
                    (user.is_admin) ? (
                        <div>
                            <button className='px-2' onClick={logoutHandler}> Logout</button>
                            <span>|</span>
                            <Link className='px-2' to={'/Profile'}>Profile </Link>
                            <span>|</span>
                            <Link className='px-2' to={'/Profile'}>UsersList </Link>
                            <span>|</span>
                            <Link className='px-2' to={'/Profile'}>Notifications </Link>
                            <span>|</span>
                            <Link className='px-2' to={'/register'}> Register</Link>
                        </div>
                    ) : (
                        <div>
                            <button className='px-2' onClick={logoutHandler}> Logout</button>
                            <span>|</span>
                            <Link className='px-2' to={'/Profile'}>Profile</Link>
                        </div>
                    )
                ) : (
                <div>
                <Link className='px-2' to={'/login'}> login</Link>
                <span>|</span>
                <Link className='px-2' to={'/register'}> Register</Link>
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