import React from 'react'
import { Switch, Route } from 'react-router-dom'

import UsersPage from '../UsersPage'
import LoginForm from '../forms/LoginForm'
import RegistrationForm from '../forms/RegistrationForm'

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={UsersPage} />
      <Route path='/register' component={RegistrationForm} />
      <Route path='/login' component={LoginForm} />
    </Switch>
  )
}

export default AppRouter