import Nav from '../../components/Nav'
import Header from '../../components/Header'

function FoodieConfigs() {
  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>
      <div className="landing-page full-width flex column gap">
        <Header />
        Configs
      </div>
    </div>
  )
}

export default FoodieConfigs
