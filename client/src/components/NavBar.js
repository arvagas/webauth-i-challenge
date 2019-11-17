import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../actions'

const NavBar = ({ logout }) => {
  return (
    <div>
      <NavLink to='/'>Users</NavLink>
      <NavLink to='/register'>Register</NavLink>
      <NavLink to='/login'>Log In</NavLink>
      <NavLink to='/' onClick={() => logout()}>Log Out</NavLink>
    </div>
  )
}

export default connect(null, { logout })(NavBar)