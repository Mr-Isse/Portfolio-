import React from 'react';
import image from '../assets/imgae.jpg'
const HeroSection = () => {
  return (
    <div className='flex justify-between items-center flex-col mt-16 md:flex-row'>
      <div>
        <h3 className='text-2xl mb-6  rounded-2xl text-start text-gray-400 font-medium'>Full-Stack Developer</h3>
        <h1 className='text-2xl mb-3 font-medium'>Hi, I'm <span className='text-3xl text-blue-500'>Eng-Asad</span></h1>
        <p className='text-2xl text-gray-500'>I have experience web applications using technologies like React, Node.js, Express, and MongoDB.</p>
      </div>
      <div>
        <img 
        className=" md:w-68 md:h-48 md:rounded-full w-48 h-48 mt-6
         rounded-full border border-gray-400 shadow-lg cursor-pointer transition-all ease-in-out hover:shadow-2xl hover:transition-transform duration-200"
        src={image} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
