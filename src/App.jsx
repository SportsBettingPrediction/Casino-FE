import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import TopNav from './components/top-nav/TopNav'
import SideNav from './components/side-nav/SideNav'
import Footer from './components/footer/Footer'

function App() {

  return (
    <HashRouter>
      <TopNav />
      <div className='flex items-start'>
        <SideNav />
        <div className='pt-[5rem] bg-primary-color w-[82%] ml-auto'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </HashRouter>
  )
}

export default App
