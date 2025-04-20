import React from 'react'
import Navigation from './Navigation/Navigation'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './SideBar/Sidebar'

const App = () => {
  return (
    <>
      <Navigation />
      {/* <Products /> */}
      <Sidebar />
      <Recommended />
    </>
  )
}

export default App
