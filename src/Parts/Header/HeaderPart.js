import React, { useState } from 'react'

function HeaderPart() {
  return (
    <>
        <div className='naviEl group peer'>
            Hakkımızda
            <ul className='transform -z-50 translate-y-[132px] scale-y-0 absolute bg-orange-600  group-hover:scale-100 bottom-0 left-0 transition duration-300 ease-in-out origin-top w-40 md:w-64 shadow-md text-white'>
                <li className='px-4 py-2 w-full transition duration-300 ease-linear hover:bg-orange-800 '>Hakkımızda</li>
                <li className='px-4 py-2 w-full transition duration-300 ease-linear hover:bg-orange-800'>TarİhÇe</li>
                <li className='px-4 py-2 w-full transition duration-300 ease-linear hover:bg-orange-800'>Mİsyon ve Vİzyon</li>
            </ul>
        </div>
        <div className='naviEl group'>
            Projelerİmİz
            <span className="naviAn group-hover:w-full -z-1"></span>
        </div>
        <div className='naviEl group'>
            Galerİ
            <span className="naviAn group-hover:w-full -z-1"></span>
        </div>
        <div className='naviEl group'>
            S.S.S.
            <span className="naviAn group-hover:w-full -z-1"></span>
        </div>
        <div className='naviEl group'>
            İletİşİm
            <span className="naviAn group-hover:w-full -z-1"></span>
        </div> 
    </>
  )
}

export default HeaderPart
