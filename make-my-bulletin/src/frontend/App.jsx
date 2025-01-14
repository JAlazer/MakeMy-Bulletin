import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Button from "./components/Button.jsx"

function App() {
  return (
  <>
    <div className="head">
      <Header />
    </div>
    
    <div className="PAWS-button">
      <Button professional="Professional Bulletin Board!" />
      <Button affinity="Affinity and Identity Bulletin Board!" />
      <Button wellbeing="Wellbeing Bulletin Board!" />
      <Button social="Social Action Bulletin Board!" />
    </div>
  </>
  )
}

export default App
