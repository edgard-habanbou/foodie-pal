import { Route, Routes, HashRouter } from 'react-router-dom'
import './app.css'
import Auth from './pages/Auth'
import Landing from './pages/Landing'
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
