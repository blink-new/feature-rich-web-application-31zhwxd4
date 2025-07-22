import { useEffect, useState } from 'react'
import { blink } from './blink/client'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import ProcessFlow from './components/ProcessFlow'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-300">Loading Pinaki360...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <ProcessFlow />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App