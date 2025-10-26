import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Header from './components/Header';
import Footer from './Components/Footer';
import Projects from './Pages/Projects';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <Header/>
      <HeroSection/>
      <Skills/>
      <Routes>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
