import { useNavigate } from 'react-router-dom'
import './index.css'
function Header() {
  const navigate = useNavigate()
  const userImage = JSON.parse(localStorage.getItem('user')).imageUrl
  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    navigate('/')
  }
  console.log(import.meta.env)
  return (
    <div className="header flex space-between center">
      <button className="btn danger" onClick={handleLogout}>
        Logout
      </button>
      <div>
        <img
          src={`https://localhost:8000/images/${userImage}`}
          alt="userImage"
          className="user-image"
        />
      </div>
    </div>
  )
}

export default Header
