import { userApi } from '../../network/axios'
import SwiperVertical from '../SwiperVertical'
import PropTypes from 'prop-types'
import './index.css'

function Users({ setLoading, handleGetUsers, users }) {
  const deleteBtnHandler = async (item) => {
    setLoading(true)
    try {
      const data = {
        subDocument: {
          items: {
            name: item
          }
        }
      }
      await userApi.deleteFromUser(data)
      handleGetUsers()
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
        <SwiperVertical items={users} deleteBtnHandler={deleteBtnHandler} slidesPerView={4.5} />
      </div>
    </>
  )
}
Users.PropTypes = {
  setLoading: PropTypes.func.isRequired,
  handleGetUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired
}
export default Users
