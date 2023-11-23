import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './components/signin'
import Home from './components/home'
import SignUp from './components/signup'
import Products from './components/products'
import Vegetables from './components/vegetable'
import Fruits from './components/fruit'
import Dairy from './components/dairy'
import AddCart from './components/addcart'
import Navbar from './components/navbar'
import { useState } from 'react'
import { AuthContext } from './components/context'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [inDetails, setInDetails] = useState({
    email: '',
    password: '',
  })

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, inDetails, setInDetails }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<Products />} />
          <Route path="/vegetables" element={<Vegetables />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/dairy" element={<Dairy />} />
          <Route path="/addCart" element={<AddCart />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
