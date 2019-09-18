import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <NavLink to='/'>Users</NavLink>
      <NavLink to='/register'>Register</NavLink>
      <NavLink to='/login'>Log In</NavLink>
      <NavLink to='/logout'>Log Out</NavLink>
    </div>
  )
}

export default NavBar