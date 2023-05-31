import React, { useEffect , useState} from 'react'
import {Link, Outlet} from "react-router-dom";
export default function Dashboard(){

    return(
        <div class="admin">
        <header class="admin__header">
          <a href="#" class="logo">
            <img src=".\image\logo-bg.png" alt="Logo"  className="d-inline-block align-text-top" />
          </a>
          <div class="toolbar">
            <h2>Welcome Back!</h2>
            <a href="#" class="logout">
              Log Out
            </a>
          </div>
        </header>
        <div class='main1'>
        <nav class="admin__nav">
          <div class="menu">
            <div class="menu__item">
              <a class="menu__link" href="#"><Link to="/dashboard/addCustomer">Add Customer</Link></a>
            </div>
            <div class="menu__item">
              <a class="menu__link" href="#"><Link to="/dashboard/addCustomer">Campaign</Link></a>
            </div>
            <div class="menu__item">
              <a class="menu__link" href="#"><Link to="/dashboard/addCustomer">Settings</Link></a>
            </div>
            <div class="menu__item">
              <a class="menu__link" href="#"><Link to="/dashboard/addCustomer">Add Services</Link></a>
            </div>
            
          </div>
        </nav>
        <div className='main2'>
        <main class="admin__main">
          <Outlet />
        </main>
        </div>
        </div>
      </div>
      
      )
}