import {createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Github, {githubInfoLoader} from './Components/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact />} />
      <Route 
    loader={githubInfoLoader} 
    path='github' 
    element={<Github />} 
      />
    </Route>
  )
)


function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
