import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router'
import CourseDetails from './pages/CourseDetails/CourseDetails.jsx'
import Calender from './pages/Calender.jsx/Calender.jsx'
import Dashboard from './pages/Home/Dashboard.jsx'
import Inbox from './pages/Inbox.jsx/Inbox.jsx'
import Help from './pages/Help/Help.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='/' element={<Dashboard />} />
      <Route path='/courses/:id' element={<CourseDetails />} />
      <Route path='/calendar' element={<Calender />} />
      <Route path='/inbox' element={<Inbox />} />
      <Route path='/help' element={<Help />} />
    </Route>
  )

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>

)
