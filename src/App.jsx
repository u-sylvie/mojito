import { useState } from 'react'
import Navbar from './components/Navbar'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import About from './components/About'

gsap.registerPlugin(ScrollTrigger, SplitText)
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  )
}

export default App
