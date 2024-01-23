import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {
  return (
    <>
        <header>
            <Header />
            <Nav />
        </header>
        <main>
            <Outlet />
        </main>
        <Footer />     
    </>
  )
}

export default App
