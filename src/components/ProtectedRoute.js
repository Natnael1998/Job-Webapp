import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()
    if (!user){
        return <>
        <Navigate to="/" />
        {alert("Please Sign in to post a Job")}
        
        </>
    }else {
        return children
    }
 
}

export default ProtectedRoute