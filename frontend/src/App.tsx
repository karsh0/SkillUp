
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Homepage } from './Pages/Homepage'
import { Signup } from './Pages/Signup'
import { Signin } from './Pages/Signin'
import { Dashboard } from './Pages/Dashboard'
import { AdminDashboard } from './components/admin/AdminDashboard'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/admin/dashboard' element={<AdminDashboard/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
