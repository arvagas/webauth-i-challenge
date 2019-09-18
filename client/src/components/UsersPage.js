import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'

import UserCard from './UserCard'
import { getUsers } from '../actions'

const UsersPage = ({ getUsers }) => {
  const users = useSelector(state => state.users)

  useEffect(() => {
    getUsers()
  }, [])

  if (users === undefined) return <p>Is loading...</p>
  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user}/>
      ))}
    </div>
  )
}

export default connect(null, { getUsers })(UsersPage)