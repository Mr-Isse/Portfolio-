import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useTheme} from 'next-themes'
const Header = () => {
    const [Open,SetOpen]=useState(false);
    const {theme,setTheme}= useTheme();
  return (
    <div className='flex justify-between items-center mx-26'>
      <div>
        <h1 className='text-4xl font-medium'>Eng-<span className='text-blue-400'>Asad</span></h1>
      </div>
      <div>
        <Bars3Icon className='w-7 cursor-pointer mx-8 md:hidden' onClick={()=>SetOpen(!Open)}/>
      </div>
      <div className='items-center space-x-10 hidden md:flex'>
        <Link to='/' className='text-2xl font-medium'>Home</Link>
        <Link to='/projects' className='text-2xl font-medium'>Projects</Link>
        <Link to='/about' className='text-2xl font-medium'>About</Link>
        <Link to='/contact' className='text-2xl font-medium'>Contact</Link>
        {theme==="dark" ? (<MoonIcon className='w-7 cursor-pointer' onClick={()=> setTheme("light")}/>):
        <SunIcon className='w-8 cursor-pointer' onClick={()=>setTheme("dark")}/>
        }
        
      </div>
      <div className={`items-center space-y-18 flex flex-col md:hidden top-24 h-screen absolute w-screen shadow-2xl bg-gray-100 ${Open? "flex" : "hidden"}`}>
        <Link to='/' className='text-2xl font-medium'>Home</Link>
        <Link to='/projects' className='text-2xl font-medium'>Projects</Link>
        <Link to='/about' className='text-2xl font-medium'>About</Link>
        <Link to='/contact' className='text-2xl font-medium'>Contact</Link>
        <SunIcon className='w-8'/>
      </div>
    </div>
  );
}

export default Header;
