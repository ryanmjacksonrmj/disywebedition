import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from "./pages/Register"
import Login from "./pages/Login"
import Chat from "./pages/Chat"
import SetAvatar from './pages/SetAvatar'
import './index.css'


function App() {

  return (
  <div><BrowserRouter>
  <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/setAvatar" element={<SetAvatar />} />
    <Route path="/" element={<Chat />} />
  </Routes>
  </BrowserRouter></div>
  )
}

export default App
