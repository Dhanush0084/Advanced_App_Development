import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Auth/login'
import  Register from './pages/Auth/register'
import Contact from './pages/contact'
const App = () => {
  return (
    <>
    <BrowserRouter> 
    <Routes>
 <Route path='/'element={<Home/>} />
 <Route path='/register'element={<Register/>} />
 <Route path='/login'element={<Login/>} />
 <Route path='/contact'element={<Contact/>} />
    </Routes>
    
    </BrowserRouter>
    </>

  )
}

export default App