import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Login from './views/Login'
import Register from './views/Register'
import Places from './views/Places'
import { useContext, useEffect } from 'react'
import { setUser } from './reducers/userReducer'
import { MessageContext } from './context/MessageContext'
import NotFound from './views/NotFound'

function App() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const { message } = useContext(MessageContext)

  useEffect(() => {
    const loggedUserJSON = localStorage.getItem('loggedTouristAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUser(user))
    }
  }, [])

  return (
    <Router>
      {message && (
        <div className="alert-container">
          <div className="alert">
            <h3>{message}</h3>
          </div>
        </div>
      )}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/paths" element={<Places type="paths" />} />
        <Route path="/routes" element={<Places type="routes" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
