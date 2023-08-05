import { useState } from 'react'
import './App.css'
import AllPosts from './components/AllPosts'
import SignUpForm from './components/SignUpForm'

import { NavLink, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [ token, setToken ] = useState(null)
  


  return (
    <>
    <nav>
      <NavLink to='/signupform'>Sign up</NavLink>
      <NavLink to='/dash'> Profile</NavLink>
    </nav>
   
   
   <Routes>
  <Route path='/allposts' element={<AllPosts setToken={token}/>}/>
  <Route path='/signupform' element={<SignUpForm setToken={setToken}/>}/>
</Routes> 
      
      
    </>
  )
}

export default App
