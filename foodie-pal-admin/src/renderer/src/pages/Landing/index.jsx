import { useEffect, useState } from 'react'
import EChart from '../../components/EChart'
import Header from '../../components/Header'
import { userApi } from '../../network/axios'
import Loading from '../../components/Loading'
import Card from '../../components/Card'
import './index.css'

const Landing = () => {
  const [userCreationData, setUserCreationData] = useState([])
  const [maleCount, setMaleCount] = useState([])
  const [femaleCount, setFemaleCount] = useState([])
  const [dietPlanCreationTimes, setDietPlanCreationTimes] = useState([])
  const [dietPlanCount, setDietPlanCount] = useState('')
  const [totalItemsCount, setTotalItemsCount] = useState('')
  const [userCount, setUserCount] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getStatistics = async () => {
      try {
        const stats = await userApi.getStats()
        setDietPlanCount(stats.dietPlanCount)
        setMaleCount(stats.male)
        setFemaleCount(stats.female)
        setTotalItemsCount(stats.totalItemsCount)
        setUserCount(stats.userCount)
        const formattedUserCreationData = formatUserCreationData(stats.userCreationTimes)
        setUserCreationData(formattedUserCreationData)
        const formattedDietPlanCreationTimes = formatUserCreationData(stats.dietPlanCreationTimes)
        setDietPlanCreationTimes(formattedDietPlanCreationTimes)
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

    const sortedUserCounts = Object.entries(userCountsPerDay)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => new Date(a.date) - new Date(b.date))

    return sortedUserCounts
  }

  return (
    <div className="landing-page flex column gap">
      <Header />
      <div className="flex space-around">
        <Card title="Total Diet Plans" data={dietPlanCount} />
        <Card title="Total Items Added" data={totalItemsCount} />
        <Card title="Total Users" data={userCount} />
        <Card title="Male Users" data={maleCount} />
        <Card title="FEmale Users" data={femaleCount} />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex column gap">
          <EChart
            title="User Creation"
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
          <EChart
            title="Diet Plan Creation"
            xAxis={{
              type: 'category',
              data: dietPlanCreationTimes.map((data) => data.date)
            }}
            legend={{
              data: ['User Creation Times']
            }}
            yAxis={{ type: 'value' }}
            series={[
              {
                type: 'line',
                data: dietPlanCreationTimes.map((data) => data.count)
              }
            ]}
          />
        </div>
      )}
    </div>
  )
}

export default Landing
