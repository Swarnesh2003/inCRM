import React, { useEffect , useState} from 'react'
import {Link, Outlet} from "react-router-dom";
export default function Dashboard(){

    return(
    <div className='dashboard'>
        <div className='dashboard-links'>
            <Link to="/dashboard/addCustomer"><button>Add Customer</button></Link>
        </div>
        <div className='dashboard-outlets'>
            <div className='dashboard-outlet-header'>
                <h3>Welcome Back!!</h3>
            </div>
            <div className='dashboard-outlet-main'>
                <Outlet />
            </div>
        </div>
    </div>)
}