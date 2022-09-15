import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import MediaAssets from './Pages/MediaAssets';
import ProductReleases from './Pages/ProductReleases';
import Contact from './Pages/Contact';
import Home from './SharedLayout';
import AirBnb from './Pages/AirBnb';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<AirBnb/>}/>
          <Route path='/about-us/' element={<AboutUs/>}/>
          <Route path='/media-assets/' element={<MediaAssets/>}/>
          <Route path='/product-releases/' element={<ProductReleases/>}/>
          <Route path='/contact/' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
