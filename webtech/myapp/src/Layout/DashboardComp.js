import React from 'react'
import { Outlet } from 'react-router-dom'
import NavComp from './NavComp'
import FooterComp from './FooterComp'

const DashboardComp = () => {
    return (
        <div className='container mt-2'>
              {/* <h2>this is my dashboard</h2> */}
              <div className='card-header border-primary'><NavComp/></div>
              <div className='card-body border-primary'><Outlet/></div>
              <div className='card-footer border-primary'><FooterComp/></div>
    </div>
    )
}

export default DashboardComp