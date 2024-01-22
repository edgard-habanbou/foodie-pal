import PropTypes from 'prop-types'
function Card({ title, data }) {
  return (
    <div className="card">
      <div className="flex color-white column center gap">
        <div>{title}</div>
        <div>{data}</div>
      </div>
    </div>
  )
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired
}
export default Card
