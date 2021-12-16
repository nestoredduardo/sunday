import React from 'react'
import Header from './Header'
import NavBar from './NavBar'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative lg:grid lg:grid-cols-3 lg:grid-rows-5">
      <Header />
      {children}
      <NavBar />
    </div>
  )
}

export default Layout
