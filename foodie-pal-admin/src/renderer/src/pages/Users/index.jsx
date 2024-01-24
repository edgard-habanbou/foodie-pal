import Nav from '../../components/Nav'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { userApi } from '../../network/axios'

function Users() {
  const [allUsers, setAllUsers] = useState([])

  const getAllUsers = async () => {
    try {
      const users = await userApi.getUsers()
      setAllUsers(users)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  const handleDeleteUser = async (userId) => {
    // try {
    //   await userApi.deleteUser(userId)
    //   setAllUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId))
    // } catch (error) {
    //   console.error('Error deleting user:', error)
    // }
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
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Diet Plan</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUsers &&
              allUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.gender ? 'Female' : 'Male'}</td>
                  <td>{user.dietPlan ? 'True' : 'False'}</td>
                  <td>
                    <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
