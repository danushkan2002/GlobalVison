import React,{ useEffect } from 'react'
import {Navigate, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../Actions/userAction'

const PrivateRoute = () => {
    const userProfileData = useSelector(state => state.userProfileData)
    const { userProfile } = userProfileData

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserDetails())
    },[dispatch])
  return ( !userProfile ? <Outlet/> : <Navigate to='/'/>
    
  )
}

export default PrivateRoute