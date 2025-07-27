import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './componentes/Navigation/Navigation.jsx'

const App = () => {
  return (
    <>
    <Navigation />
    <Outlet />
    </>
  )
}

export default App