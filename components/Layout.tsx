import React from 'react'
import Header from './Header'
import NavBar from './NavBar'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      <Header />
      {children}
      <NavBar />
    </div>
  )
}

export default Layout
