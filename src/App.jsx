import { useState } from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Tape from './sections/Tape'
import About from './sections/About'
import { Hero1 } from './sections/Hero1'
// import reactLogo from './assets/react.svg'

function App() {

  return (
    <>
      <Header />
      {/* <Hero /> */}
      <Hero1 />
      <Projects />
      <Tape />
      <About />
    </>
  )
}

export default App
