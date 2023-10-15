import { useState } from 'react'
import Navbar from './components/Navbar'
import MainBanner from './components/MainBanner'

function App() {

  return (
    <div className='bg bg-background dark'>
      <Navbar />
      <MainBanner />
    </div>
  )
}

export default App
