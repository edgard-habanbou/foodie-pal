import { useEffect, useState } from 'react'
import EChart from '../../components/EChart'
import Header from '../../components/Header'
import { userApi } from '../../network/axios'
import Loading from '../../components/Loading'

const Landing = () => {
  const [userCreationData, setUserCreationData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getStatistics = async () => {
      try {
        const stats = await userApi.getStats()
        console.log(stats)
        const formattedUserCreationData = formatUserCreationData(stats.userCreationTimes)
        setUserCreationData(formattedUserCreationData)
      } catch (error) {
        console.error('Error fetching statistics:', error)
      } finally {
        setLoading(false)
        setTimeout(getStatistics, 5000)
      }
    }

    getStatistics()
  }, [])

  const formatUserCreationData = (userCreationTimes) => {
    const userCountsPerDay = userCreationTimes.reduce((acc, time) => {
      const date = new Date(time).toLocaleDateString()
      acc[date] = (acc[date] || 0) + 1
      return acc
    }, {})
    return Object.entries(userCountsPerDay).map(([date, count]) => ({
      date,
      count
    }))
  }

  return (
    <div className="flex column gap">
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <EChart
          title="User Creation Times"
          xAxis={{
            type: 'category',
            data: userCreationData.map((data) => data.date)
          }}
          legend={{
            data: ['User Creation Times']
          }}
          yAxis={{ type: 'value' }}
          series={[
            {
              type: 'line',
              data: userCreationData.map((data) => data.count)
            }
          ]}
        />
      )}
    </div>
  )
}

export default Landing
