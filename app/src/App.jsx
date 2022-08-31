import { HashRouter as Router } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useContext, useEffect } from 'react'
import { setUser } from './reducers/userReducer'
import { MessageContext } from './context/MessageContext'
import AlertMessage from './components/AlertMessage'
import RoutesComponent from './components/RoutesComponent'

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
      {message && <AlertMessage message={message} />}
      <Navbar />
      <RoutesComponent />
      <Footer />
    </Router>
  )
}

export default App
