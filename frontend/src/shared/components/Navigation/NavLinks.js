import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './NavLink.module.css';

const NavLinks = props => {
  return (
    <ul className={classes['nav-links']}>
        <li>
            <NavLink onClick ={props.onClick} className={({isActive}) => (isActive ? classes['active']:undefined)} to='/'>ALL USERS</NavLink>
        </li>
        <li>
            <NavLink onClick ={props.onClick} className={({isActive}) => (isActive ? classes['active']:undefined)} to='/u1/places'>MY PLACES</NavLink>
        </li>
        <li>
            <NavLink onClick ={props.onClick} className={({isActive}) => (isActive ? classes['active']:undefined)} to='/places/new'>ADD USERS</NavLink>
        </li>
        <li>
            <NavLink onClick ={props.onClick}  className={({isActive}) => (isActive ? classes['active']:undefined)} to='/auth'>AUTHENTICATE</NavLink>
        </li>
      
    </ul>
  )
}

export default NavLinks
