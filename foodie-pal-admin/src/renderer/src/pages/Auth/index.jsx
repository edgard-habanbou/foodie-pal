import { useState } from 'react'
import { userApi } from '../../network/axios'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading'
import Login from '../Login'

import './index.css'

function Auth() {
  const [Load, setLoading] = useState(false)
  const navigate = useNavigate()

  const checkIfLoggedIn = async () => {
    if (localStorage.getItem('token')) {
      const response = await userApi.checkIfLoggedIn({
        token: localStorage.getItem('token')
      })
      if (response.user) {
        navigate('/home')
      }
    }
  }
  checkIfLoggedIn()
  return (
    <div>
      {Load && <Loading />}
      <div className="image"></div>
      <Login setLoading={setLoading} />
    </div>
  )
}

export default Auth
