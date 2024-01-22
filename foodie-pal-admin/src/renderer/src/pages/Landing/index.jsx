import EChart from '../../components/EChart'
import Header from '../../components/Header'
const Landing = () => {
  return (
    <div className="flex column gap">
      <Header />
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
    </div>
  )
}

export default Landing
