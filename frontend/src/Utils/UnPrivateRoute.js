import React,{ useEffect } from 'react'
import {Navigate, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../Actions/userAction'

const PrivateRoute = () => {
    const userDetails = useSelector(state => state.userDetails)
    const { user } = userDetails

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserDetails())
    },[dispatch])
  return ( !user ? <Outlet/> : <Navigate to='/'/>
    
  )
}

export default PrivateRoute