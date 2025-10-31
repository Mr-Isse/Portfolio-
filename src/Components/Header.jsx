import { MoonIcon, SunIcon } from 'lucide-react';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'next-themes'
const Header = () => {
  const [Open,SetOpen] = useState(false);
  const { theme, setTheme } = useTheme()
  return (
    <div className='flex justify-between items-center mt-6'>
        <h1 className='text-2xl'>Eng<span className='text-3xl text-blue-400'>Asad</span></h1>
      <div className='flex md:hidden'>
        <FaBars className='size-7 my-2 cursor-pointer' onClick={()=>SetOpen(!Open)}/>
      </div>
      <div className='hidden space-x-10 mx-4 items-center md:flex '>
        <a href="" className='text-2xl'>Home</a>
        <a href="" className='text-2xl'>Projects</a>
        <a href="" className='text-2xl '>About</a>
        <a href="" className='text-2xl'>Contact</a>
        {theme==="dark"? <MoonIcon className='size-9 cursor-pointer' onClick={()=> setTheme("light")}/>: <SunIcon className='size-9 cursor-pointer' onClick={()=> setTheme("dark")}/>}
       </div>
       <div className={`flex flex-col space-y-24 items-center md:hidden absolute top-22 bg-white  mt-38 bg- shadow-lg h-screen w-screen ${Open? "flex": "hidden"} `}>
        <a href="" className='text-2xl'>Home</a>
        <a href="" className='text-2xl'>Projects</a>
        <a href="" className='text-2xl '>About</a>
        <a href="" className='text-2xl'>Contact</a>
        <MoonIcon className='cursor-pointer mx-3'/>
       </div>
    </div>
  );
}

export default Header;
