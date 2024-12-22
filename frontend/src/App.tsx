
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Homepage } from './Pages/Homepage'
import { Signup } from './Pages/Signup'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
