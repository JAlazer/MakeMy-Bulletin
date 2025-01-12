import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Button from "./components/Button.jsx"

function App() {
  return (
  <>
    <Header />
    <div className="PAWS-button">
      <Button professional="Professional Bulletin Board!" />
      <Button professional="Professional Bulletin Board!" />
      <Button professional="Professional Bulletin Board!" />
      <Button professional="Professional Bulletin Board!" />
    </div>
  </>
  )
}

export default App
