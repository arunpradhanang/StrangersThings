import { useState } from 'react'
import JWTExample from './components/SignUpForm'
import './App.css'
import AllPosts from './components/AllPosts'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)
  const [ name, setName ] = useState('')
  const [ error, setError] = useState('')
  const [ token, setToken ] = useState(null)

  function formSubmit(event) {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson)

    console.log('FINAL:', name)
    setName('') // reset after name is submitted
  }

  function nameValidation(event) {
    const newName = event.target.value

    if (newName.length < 8) {
      setError('Name needs to be at least 8 characters')
    } else {
      setError('')
    }

    setName(newName)
  }


  return (
    <>
    
    <SignUpForm setToken={setToken} />
    <Authenticate token={token}/>
      <AllPosts/>
      <Nav/>
      
      
    </>
  )
}

export default App
