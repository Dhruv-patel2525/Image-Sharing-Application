import React, { Fragment } from 'react'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import { Outlet } from 'react-router-dom'
import classes from './RootLayout.module.css';
const RootLayout = () => {
    
  return (
    <Fragment >
        <MainNavigation />
        <main className={classes.main}>
            <Outlet />
        </main>
    </Fragment>
  )
}

export default RootLayout
