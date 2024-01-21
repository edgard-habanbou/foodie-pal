import { Route, Routes, HashRouter } from 'react-router-dom'
import Login from './pages/Login'
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
