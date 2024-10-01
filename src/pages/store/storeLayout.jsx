import React from 'react'
import StoreNavBar from '../../components/StoreNavBar'
import StoreFooter from '../../components/StoreFooter'
import { Outlet } from 'react-router-dom'

const StoreLayout = () => {
  return (
    <div>
        <StoreNavBar />
            <Outlet />
        <StoreFooter />
    </div>
  )
}

export default StoreLayout