import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { userApi } from '../../network/axios'
import Popup from '../../components/Popup'
import texts from './texts'
import SwiperAuto from '../../components/SwiperAuto'
import PropTypes from 'prop-types'

function Login({ setLoading }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleLogin = async () => {
    setLoading(true)
    try {
      const response = await userApi.loginUser({ email, password })
      console.log(response)
      if (response.token && response.user && response.role === 'admin') {
        localStorage.setItem('token', response.token)
        localStorage.setItem('user', JSON.stringify(response.user))
        navigate('/home')
      } else if (response.message === 'Request failed with status code 400') {
        Popup({
          title: 'Error',
          text: `Wrong Credentials`,
          icon: 'error',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#FE8A01'
        })
      } else if (response.message === 'Invalid email') {
        Popup({
          title: 'Error',
          text: `Invalid Email`,
          icon: 'error',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#FE8A01'
        })
      } else {
        Popup({
          title: 'Error',
          text: `Something went wrong`,
          icon: 'error',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#FE8A01'
        })
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
    }
    setLoading(false)
  }
  return (
    <div>
      <div className="flex login full-height">
        {screenWidth > 950 && (
          <div className="image-sidebar flex center">
            <div className="margin padding flex center full-width">
              <SwiperAuto texts={texts} />
            </div>
          </div>
        )}
        <div className="flex column gap center login-form full-height">
          <div>
            <h2>Login</h2>
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Email"
              className="input"
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
            />
          </div>
          <div className="flex column gap ">
            <div className="flex center password-input">
              <div className="form-control">
                {showPassword ? (
                  <input
                    type="text"
                    placeholder="Password"
                    className="input"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                ) : (
                  <input
                    type="password"
                    placeholder="Password"
                    className="input"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                )}
              </div>
              <div>
                {!showPassword ? (
                  <FontAwesomeIcon
                    className="password-icon"
                    onClick={handleShowPassword}
                    icon={faEye}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="password-icon"
                    icon={faEyeSlash}
                    onClick={handleShowPassword}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex column gap ">
            <div className="form-control">
              <button className="btn" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  setLoading: PropTypes.any
}

export default Login
