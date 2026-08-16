import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'
import Service from './pages/service/Service'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router