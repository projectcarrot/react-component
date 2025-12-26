import './App.css'
import '../components/Register.css'
import Register from '../components/Register'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
