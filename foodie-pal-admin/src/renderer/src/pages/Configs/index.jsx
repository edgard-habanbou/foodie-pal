import React from 'react'
import Nav from '../../components/Nav'
import Header from '../../components/Header'

function Configs() {
  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>
      <div className="landing-page full-width flex column gap">
        <Header />
      </div>
    </div>
  )
}

export default Configs
