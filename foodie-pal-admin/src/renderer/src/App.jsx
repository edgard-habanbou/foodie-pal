import { Route, Routes, HashRouter } from 'react-router-dom'
import './app.css'
import Auth from './pages/Auth'
import Landing from './pages/Landing'
import FoodieConfigs from './pages/Configs'
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/foodie-config" element={<FoodieConfigs />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
