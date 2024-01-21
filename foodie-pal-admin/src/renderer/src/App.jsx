import { Route, Routes, HashRouter } from 'react-router-dom'
import Auth from './pages/Auth'
import './app.css'
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
