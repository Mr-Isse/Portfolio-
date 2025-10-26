import React from 'react';
import {FaAndroid, FaApple, FaCode, FaCss3Alt, FaDatabase, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaJava, FaMobileAlt, FaNodeJs, FaNpm, FaReact, FaServer} from "react-icons/fa";
import { SiExpress, SiFlutter, SiJavascript, SiMongodb, SiReact, SiVercel } from "react-icons/si";
const Skills = () => {
  return (
    <div className='mt-12'>
      <h1 className='text-3xl font-bold text-center m-3'>Skills & Technologies</h1>
      <div className='grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mx-4 mt-6'>
        <div className='border border-gray-200 w-63 h-98 shadow hover:shadow-2xl cursor-pointer'>
            <FaCode className='w-6 size-16 mx-2'/>
            <h1 className='text-2xl font-medium  mb-3'>Forented</h1>
            <div className='flex space-x-4 items-center mb-4'>
                <FaHtml5 className=' size-8'/> 
                <span className='text-2xl font-medium'>Html</span>
            </div>
            <div className='flex space-x-4 items-center mb-4'>
                <FaCss3Alt className='size-8'/> 
                <span className='text-2xl font-medium'>Css</span>
            </div>
            <div className='flex space-x-4 items-center mb-4'>
                <SiJavascript className='size-8'/> 
                <span className='text-2xl font-medium'>JavaScript</span>
            </div>
            <div className='flex space-x-4 items-center mb-4'>
                <FaReact className='size-8'/> 
                <span className='text-2xl font-medium'>React</span>
            </div>
        </div>
        <div className='border border-gray-200 w-63 h-98 shadow hover:shadow-2xl cursor-pointer'>
            <FaServer className='w-6 size-16 mx-2'/>
            <h1 className='text-2xl font-medium'>Backend</h1>
            <div className='flex space-x-4 items-center mb-3'>
                <FaDatabase className=' size-8'/> 
                <span className='text-2xl font-medium'>Database</span>
            </div>
            <div className='flex space-x-4 items-center mb-3'>
                <FaNodeJs className='size-8'/> 
                <span className='text-2xl font-medium'>NodeJs</span>
            </div>
            <div className='flex space-x-4 items-center mb-3'>
                <SiExpress className='size-8'/> 
                <span className='text-2xl font-medium'>ExpressJs</span>
            </div>
            <div className='flex space-x-4 items-center mb-3'>
                <SiMongodb className='size-8'/> 
                <span className='text-2xl font-medium'>MangoDB</span>
            </div>
        </div>
          <div className='border border-gray-200 w-63 h-98 shadow hover:shadow-2xl cursor-pointer'>
            <FaMobileAlt className='w-6 size-16 mx-2'/>
            <h1 className='text-2xl font-medium mx-3'>Mobile App</h1>
            <div className='flex space-x-4 items-center mb-3'>
                <FaAndroid className='size-8'/> 
                <span className='text-2xl font-medium'>Andriod</span>
            </div>
            <div className='flex space-x-4 items-center mb-3'>
                <FaApple className='size-8'/> 
                <span className='text-2xl font-medium'>Iphone</span>
            </div>
            <div className='flex space-x-4 items-center mb-3'>
                <SiFlutter className='size-8'/> 
                <span className='text-2xl font-medium'>Flutter</span>
            </div>
            <div className='flex space-x-4 items-center'>
                <SiReact className='size-8'/> 
                <span className='text-2xl font-medium'>ReactNative</span>
            </div>
        </div>
          <div className='border border-gray-200 w-63 h-98 shadow hover:shadow-2xl cursor-pointer '>
            <FaGitAlt className='w-6 size-16 mx-2'/>
            <h1 className='text-2xl font-medium mx-3'>Tools Technologies</h1>
            <div className='flex space-x-4 items-center mb-3'>
                <FaGithub className='size-8'/> 
                <span className='text-2xl font-medium'>Github</span>
            </div>
            <div className='flex space-x-4 items-center mb-3'>
                <FaDocker className='size-8'/> 
                <span className='text-2xl font-medium'>Git</span>
            </div>
            <div className='flex space-x-4 items-center mb-3'>
                <FaNpm className='size-8'/> 
                <span className='text-2xl font-medium'>NPM</span>
            </div>
            <div className='flex space-x-4 items-center mb-3'>
                <SiVercel className='size-8'/> 
                <span className='text-2xl font-medium'>Vercel</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
