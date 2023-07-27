import React from 'react'
import { textData } from '../Data/textData'

function Info() {
  return (
    <div className='min-h-screen md:h-screen w-full py-6 px-8 flex flex-col font-mono '>
      <div className='h-1/4 bg-gray-100/70 py-1 px-2 relative'>
        <h1 className='text-4xl md:text-6xl absolute inset-2 font-bold top-[50%] left-[50%] translate-x-[-30%] translate-y-[-50%] opacity-10 text-red-900'>HüsEm İnşaat</h1>
        <div className='w-full h-full flex items-center justify-center text-center'>
        {textData}
        </div>
      </div>
      <div style={{"backgroundImage":`url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1184&q=80)`}} className='h-3/4 bg-yellow-500 py-1 px-2 flex items-center bg-cover bg-bottom bg-fixed bg-no-repeat overflow-scroll no-scrollbar justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-80'>
                    <div className='hover:cursor-pointer hover:bg-gray-300/30 transition-all duration-500  ease-in-out w-72 flex flex-col h-80 md:border-r-2 border-white'>
                        <h1 className='w-full h-20 text-white flex items-center justify-center text-4xl'>Projeler</h1>
                        <div className='text-center text-white py-4 px-2'>
                          Lorem ipsum odor amet, consectetuer adipiscing elit. Erat potenti facilisis feugiat molestie sagittis.
                        </div>
                    </div>
                    <div className='hover:cursor-pointer hover:bg-gray-300/30 transition-all duration-500  ease-in-out w-72 flex flex-col h-80 md:border-r-2 border-white'>
                        <h1 className='w-full h-20 text-white flex items-center justify-center text-4xl'>Projeler</h1>
                        <div className='text-center text-white py-4 px-2'>
                          Lorem ipsum odor amet, consectetuer adipiscing elit. Erat potenti facilisis feugiat molestie sagittis.
                        </div>
                    </div>
                    <div className='hover:cursor-pointer hover:bg-gray-300/30 transition-all duration-500  ease-in-out w-72 flex flex-col h-80 md:border-r-2 border-white'>
                        <h1 className='w-full h-20 text-white flex items-center justify-center text-4xl'>Projeler</h1>
                        <div className='text-center text-white py-4 px-2'>
                          Lorem ipsum odor amet, consectetuer adipiscing elit. Erat potenti facilisis feugiat molestie sagittis.
                        </div>
                    </div>
                    <div className='hover:cursor-pointer hover:bg-gray-300/30 transition-all duration-500  ease-in-out w-72 flex flex-col h-80 md:border-r-2 border-white'>
                        <h1 className='w-full h-20 text-white flex items-center justify-center text-4xl'>Projeler</h1>
                        <div className='text-center text-white py-4 px-2'>
                          Lorem ipsum odor amet, consectetuer adipiscing elit. Erat potenti facilisis feugiat molestie sagittis.
                        </div>
                    </div>
            </div>
      </div>
    </div>
  )
}

export default Info
