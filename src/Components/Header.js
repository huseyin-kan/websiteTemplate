import React, { useState } from 'react'
import HeaderPart from '../Parts/Header/HeaderPart'
import SideMenu from './SideMenu';

function Header() {
  const [visible,setVisible] = useState(false);

  const showMenu=()=>{
    setVisible(!visible)
  }
  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-gray-200 px-4 text-lg uppercase h-20 font-semibold shadow-md opacity-80'>
      <div className='container flex justify-between items-center mx-auto h-full'>
        <div className='p-2 centered  hover:cursor-pointer'>
            <img src='https://images.all-free-download.com/images/graphiclarge/beach_cloud_dawn_horizon_horizontal_landscape_ocean_601821.jpg' className='h-10 w-24 md:w-48 object-cover' alt=''/>      
        </div>
        
        <button className='centered p-4 md:hidden' onClick={showMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>

        <div className='md:centered hidden px-4 h-full '>
            <HeaderPart/>
        </div> 
      </div>
      <SideMenu visible={visible} showMenu={showMenu}/>
    </div>
  )
}

export default Header
