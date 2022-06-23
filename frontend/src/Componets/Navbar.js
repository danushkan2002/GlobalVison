import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../Actions/userAction'
import {  useLocation, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin 
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

  return (
    <div className='flex font-bold text-xl px-5 py-5 bg-slate-200'>
        <div className='flex justify-start'>
            { userInfo ? (
                <div>
                <button className='px-2' onClick={logoutHandler}> Logout</button>
                </div>
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