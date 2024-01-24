import Nav from '../../components/Nav'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { userApi } from '../../network/axios'
import UsersScroll from '../../components/UsersScroll'
import Loading from '../../components/Loading'

function Users() {
  const [allUsers, setAllUsers] = useState([])
  const [Load, setLoad] = useState(false)

  const getAllUsers = async () => {
    try {
      const users = await userApi.getUsers()
      setAllUsers(users)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
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
        <UsersScroll setLoading={setLoad} handleGetUsers={getAllUsers} users={allUsers} />
      </div>
      {Load && <Loading />}
    </div>
  )
}

export default Users
