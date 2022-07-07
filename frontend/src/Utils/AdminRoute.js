import React,{ useEffect } from 'react'
import {Navigate, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../Actions/userAction'

const AdminRoute = () => {
    const userProfileData = useSelector(state => state.userProfileData)
    const { userProfile } = userProfileData

    const dispatch = useDispatch()

    useEffect(() => {
        if (! userProfile) {
            dispatch(getUserDetails())
        }
    },[userProfile, dispatch])
  return ( userProfile.is_admin ? <Outlet/> : <Navigate to='/'/>
    
  )
}

export default AdminRoute