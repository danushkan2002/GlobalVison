import React,{ useEffect } from 'react'
import {Navigate, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../Actions/userAction'

const AdminRoute = () => {
    const userDetails = useSelector(state => state.userDetails)
    const { user } = userDetails

    const dispatch = useDispatch()

    useEffect(() => {
        if (! user) {
            dispatch(getUserDetails())
        }
    },[user, dispatch])
  return ( user.is_admin ? <Outlet/> : <Navigate to='/'/>
    
  )
}

export default AdminRoute