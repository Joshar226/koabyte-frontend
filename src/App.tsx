import { Route, Routes } from 'react-router-dom'
import HomeView from './views/HomeView'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      {/* Aquí puedes agregar más views: /desarrollo, /reparaciones, etc. */}
    </Routes>
  )
}
