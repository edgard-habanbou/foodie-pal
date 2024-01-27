import { userApi } from '../../network/axios'
import SwiperVertical from '../SwiperVertical'
import './index.css'

import PropTypes from 'prop-types'

function UsersScroll({ setLoading, handleGetUsers, users }) {
  const deleteBtnHandler = async (userId) => {
    setLoading(true)
    try {
      await userApi.deleteUser(userId)
      await handleGetUsers()
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }
  return (
    <>
      <div className="title">
        <h4 className="color-white">Users</h4>
        <hr />
      </div>
      <div className="title items-added flex column ">
        <SwiperVertical users={users} deleteBtnHandler={deleteBtnHandler} slidesPerView={4.5} />
      </div>
    </>
  )
}

UsersScroll.propTypes = {
  setLoading: PropTypes.func.isRequired,
  handleGetUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
}

export default UsersScroll
