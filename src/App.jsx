import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import Footer from './components/Footer'
import GalleryPage from './pages/GalleryPage'
import PriceListPage from './pages/PriceListPage'
import ContactPage from './pages/ContactPage'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { headerData } from './data/headerData'
import ScrollToHashElement from './components/ScrollToHashElement'

function Layout() {
  const location = useLocation();
  const currentHeader = headerData[location.pathname] || {};

  return (
      <>
        <Header {...currentHeader}/>

        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/price-list' element={<PriceListPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>

        <Footer />
      </>
  )
}

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <ScrollToHashElement />
        <Layout />
      </BrowserRouter>
    </div>
  )
}

export default App
