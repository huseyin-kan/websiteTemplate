import React, { useState } from 'react'

function SideMenu({showMenu, visible}) {
    const [elements,setElements] = useState(false)

    const showElements = () =>{
        setElements(!elements)
    } 

  return (
    <div className={`overflow-y-scroll no-scrollbar shadow-md w-full h-screen fixed top-0 text-slate-300 transition-all duration-500 ease-in-out flex-col bg-orange-800 
    ${visible ? 'right-0 md:hidden' : '-right-full'}`}>
      <div className='flex items-center w-full justify-between border-b-2 border-black px-4 py-2 shadow-md'>
        <div className='p-2 hover:cursor-pointer centered '>
            <img src='https://images.all-free-download.com/images/graphiclarge/beach_cloud_dawn_horizon_horizontal_landscape_ocean_601821.jpg' className='h-10 w-24 md:w-48 object-cover' alt=''/>      
        </div>
        <div className='hover:cursor-pointer centered' onClick={showMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
      </div>
      <div className='flex flex-col  text-xl  my-4'>
            <div className='px-4 py-6 border-b flex items-center justify-between'>Hakkımızda
            <div className='centered text-xl font-semibold hover:cursor-pointer' onClick={showElements}>
               { elements ?  
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>             
               :
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                }
            </div>
            </div>
            <div className={elements ? "flex flex-col text-xl bg-orange-500 transition-all duration-300 ease-linear" : "hidden"}>
                <div className='px-4 py-2 border-b'>
                    Hakkımızda
                </div>
                <div className='px-4 py-2 border-b'>
                    TarİhÇe
                </div><div className='px-4 py-2 border-b'>
                    Vİzyon ve Mİsyon
                </div>
            </div>
            <div className='px-4 py-6 border-b'>Projelerİmİz</div>
            <div className='px-4 py-6 border-b'>Galerİ</div>
            <div className='px-4 py-6 border-b'>İletİşİm</div>
            <div className='px-4 py-6 border-b'>S.S.S.</div>
      </div>
    </div>
  )
}

export default SideMenu
