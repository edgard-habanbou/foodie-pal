import Nav from '../../components/Nav'
import Header from '../../components/Header'
import { useState } from 'react'
import { userApi } from '../../network/axios'

function Users() {
  const [allUsers, setAllUsers] = useState([])
  const getAllUsers = async () => {
    const users = await userApi.getUsers()
    setAllUsers(users)
  }
  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>
      <div className="landing-page full-width flex column gap">
        <Header />
        Users
      </div>
    </div>
  )
}

export default Users
