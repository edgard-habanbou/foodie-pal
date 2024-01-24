import Logo from '../../assets/svgs/Logo.svg'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  const Logout = () => {
    localStorage.clear()
  }

  return (
    <div id="menu" className="menu hidden full-height-screen">
      <div className="flex center full-width">
        <img src={Logo} alt="logo" className="menu-logo" />
      </div>
      <div className="flex column center gap menu-items">
        <div className="menu-item flex column center ">
          <a href="/landing">
            <FontAwesomeIcon icon={faHouse} />
          </a>
          <p>Home</p>
        </div>
        <div className="menu-item flex column center logout">
          <a href="/" onClick={Logout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </a>

          <p>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default Nav
