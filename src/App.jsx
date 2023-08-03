import { useState } from 'react'
import './App.css'
import AllPosts from './components/AllPosts'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)
  const [ token, setToken ] = useState(null)
  


  return (
    <>
    <Nav/>
    <SignUpForm token={token} setToken={setToken} />
    <Authenticate token={token} setToken={setToken} />
      <AllPosts/>
      
      
      
    </>
  )
}

export default App
