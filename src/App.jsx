import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './Components/Footer';
import Skills from './components/Skills';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import HeroSection from './Components/Herosection';

const App = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <Header/>
      <HeroSection/>
      <Skills/>
      <Projects/>
      <About/>
      <Contact/>
      <Routes>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
