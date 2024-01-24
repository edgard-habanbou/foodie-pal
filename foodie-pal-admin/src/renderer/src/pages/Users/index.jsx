import Nav from '../../components/Nav'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { userApi } from '../../network/axios'

function Users() {
  const [allUsers, setAllUsers] = useState([])
  const getAllUsers = async () => {
    const users = await userApi.getUsers()
    console.log(users)
    setAllUsers(users)
  }
  useEffect(() => {
    getAllUsers()
  }, [])
  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>
      <div className="landing-page full-width flex column gap">
        <Header />
        {allUsers &&
          allUsers.map((user) => {
            return user.firstName
          })}
      </div>
    </div>
  )
}

export default Users
