import { useState } from 'react'
import './App.css'
import Example from './components/Example/Example'
import Nav from './components/Nav/Nav'
import phone from './assets/phone.png'
import Form from './components/Form/Form'
import Input from './components/Input/Input'

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="app__block">
        <Form />
        <img className="img__block" src={phone} />
      </div>
    </div>
  )
}

export default App
