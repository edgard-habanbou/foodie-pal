import Logo from '../../assets/svgs/Logo.svg'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
function Nav() {
  const navigate = useNavigate()
  const Logout = () => {
    localStorage.clear()
  }
  const handleLandingBtn = () => {
    navigate('/landing')
  }
  const handleUsersBtn = () => {
    navigate('/allusers')
  }

  return (
    <div id="menu" className="menu hidden full-height-screen">
      <div className="flex center full-width">
        <img src={Logo} alt="logo" className="menu-logo" />
      </div>
      <div className="flex column center gap menu-items">
        <div className="menu-item flex column center ">
          <a onClick={handleLandingBtn}>
            <FontAwesomeIcon icon={faHouse} />
          </a>
          <p>Home</p>
        </div>
        <div className="menu-item flex column center ">
          <a onClick={handleUsersBtn}>
            <FontAwesomeIcon icon={faUsers} />
          </a>
          <p>All Users</p>
        </div>
        <div className="menu-item flex column center logout">
          <button onClick={Logout} className="btn-menu">
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
          <p>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default Nav
