import {HashRouter, Routes, Route} from "react-router-dom"
import Inventory from './pages/inventory'
import Contact from './pages/contact'
import CreateBlog from './pages/createBlog'
import Dashboard from './pages/dashboard'
import Landing from './pages/landing'
import Services from './pages/services'
import ReadBlog from './pages/readBlog'

import Navbar from './components/navbar'
import Layout from './components/layout'

import './App.css'

function App() {
  // Pages to make

  // landing page
  // HOme page
  // Read Blog
  // Create Blog
  // Profile
  // About
  // Contact

  return (
    <HashRouter>
      <Routes>
        {/* using path / will be the default landing for users */}
        {/* Remember to use the element that you imported above when puting an element value */}
        <Route path="/" element={<Landing/>} /> 

        <Route element={<Layout/>}>
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/readblog/:id" element={<ReadBlog/>} />
          <Route path="/createblog" element={<CreateBlog/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
        
      </Routes>
    </HashRouter>
  )
}

export default App
