import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'

function App() {
  

  return (
    <>
      <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-800">
          <Header />
          <main className="flex-1 flex justify-center items-center">
              <Home />
          </main>
          <Footer />
      </div>
    </>
  )
}

export default App
