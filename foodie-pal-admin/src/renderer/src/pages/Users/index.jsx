import Nav from '../../components/Nav'
import Header from '../../components/Header'

function Users() {
  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>
      <div className="landing-page full-width flex column gap">
        <Header />
        Users
      </div>
    </div>
  )
}

export default Users
