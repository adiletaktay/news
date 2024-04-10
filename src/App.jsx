import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import MainLayout from './MainLayout'
import { NotFound } from './NotFound'

import './App.scss'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home/ >}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
