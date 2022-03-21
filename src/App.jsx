import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './container/AboutUs/AboutUs'
import Interior from './container/Interior/Interior'
import FindUs from './container/Findus/FindUs'
import Gallery from './container/Gallery/Gallery'
import Header from './container/Header/Header'
import SpecialMenu from './container/Menu/SpecialMenu'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './container/Login/Login'
import WholeMenu from './container/WholeMenu/WholeMenu'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Navigate replace to='/soho' />} />
        <Route path='/soho' element={<Header />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/menu' element={<SpecialMenu />} />
        <Route path='/wholemenu' element={<WholeMenu />} />
        <Route path='/gallery' element={(<>
          <Interior />
          <Gallery />
        </>)} />
        <Route path='/contact' element={<FindUs />} />
        <Route path='/log-in' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
