import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'



export default function PrivateRoute() {
    let  userid = localStorage.getItem("userData") == null ? false : true;
    return (
        <>
            {userid ? <Outlet  /> : <Navigate to="/login" />};
        </>

    )

}