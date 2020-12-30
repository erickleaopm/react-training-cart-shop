// import React from 'react'

import Header from './Header/Header'

function Layout({ children }) {
  return (
    <div className="App__Wrapper">
      <Header />
      {children}
    </div>
  )
}

export default Layout
