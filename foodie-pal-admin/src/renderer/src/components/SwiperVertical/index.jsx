import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './index.css'
import 'swiper/css'
import 'swiper/css/pagination'
import PropTypes from 'prop-types'

function SwiperVertical({ users, slidesPerView = 4.5, deleteBtnHandler = () => {} }) {
  return (
    <Swiper
      direction={'vertical'}
      slidesPerView={slidesPerView}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className={'instructions'}
    >
      {users?.map((user, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="instruction flex space-between">
              {user.firstName} {user.lastName}
              <button className="btn-delete" onClick={() => deleteBtnHandler(user._id)}>
                <FontAwesomeIcon icon={faTrash} size="xl" />
              </button>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

SwiperVertical.propTypes = {
  users: PropTypes.array,
  slidesPerView: PropTypes.number,
  deleteBtnHandler: PropTypes.func
}
export default SwiperVertical
