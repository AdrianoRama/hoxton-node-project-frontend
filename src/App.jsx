import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './container/AboutUs/AboutUs'
import Interior from './container/Interior/Interior'
import FindUs from './container/Findus/FindUs'
import Gallery from './container/Gallery/Gallery'
import Header from './container/Header/Header'
import SpecialMenu from './container/Menu/SpecialMenu'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './container/Login/Login'
import WholeMenu from './container/WholeMenu/WholeMenu'
import Profile from './container/Profile/Profile'
import Book from './container/Book/Book'

function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`http://localhost:4000/users`).then(resp => resp.json())
      .then(usersFromServer => setUsers(usersFromServer))
  }, [])

  useEffect(() => {
    if (localStorage.token) {
      fetch(`http://localhost:4000/validate`,
        {
          headers: {
            'Authorization': localStorage.token
          }
        }
      ).then(resp => resp.json())
        .then(userFromServer => setUser(userFromServer))
    }
  }, [])

  return (
    <div className="App">
      <Navbar user={user} />
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
        <Route path='/book' element={<Book user={user} />} />
        <Route path='/profile' element={<Profile user={user} setUser={setUser} />} />
        <Route path='/log-in' element={<Login setUser={setUser} user={user} users={users} />} />
      </Routes>
    </div>
  );
}

export default App;
