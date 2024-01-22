import EChart from '../../components/EChart'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <>
      <button className="btn danger" onClick={handleLogout}>
        Logout
      </button>
      <EChart
        title="Test"
        legend={['test1', 'test2']}
        xAxis={['test1', 'test2']}
        series={[
          {
            name: 'test1',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          },
          {
            name: 'test2',
            type: 'bar',
            data: [15, 20, 26, 20, 20, 10]
          }
        ]}
      />
    </>
  )
}

export default Landing
