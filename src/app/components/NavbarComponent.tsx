'use client'
import React, { useEffect, useState } from 'react'

const NavbarComponent = () => {

    useEffect(() => {
        document.body.style.backgroundColor = "#1d1f21";
    })

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
            <div className='sticky top-0 navbg h-[86px] flex justify-between items-center text-white px-[50px] py-[16px] z-50 backdrop-blur-md'>
                <div className='flex'>
                    <p className='font-[PoppinsBold] text-[40px] me-10 font-bold cursor-pointer'>H<span className='text-[#96D4EB]'><sub>2</sub></span>O+</p>
                    <div className='hidden lg:block'>
                    <div className=' flex gap-x-[30px] font-[ProximaNovaLight] text-[16px] h-full text-[#BBBCBC]'>
                        <a className='font-[PoppinsRegular] my-auto hover:text-[#d3d5d5]' href="#dangers">Know the Dangers</a>
                        <a className='font-[PoppinsRegular] my-auto hover:text-[#d3d5d5]' href="#prepare">How to Prepare</a>
                        <a className='font-[PoppinsRegular] my-auto hover:text-[#d3d5d5]' href="#faq">FAQ</a>

                    </div>
                </div>
                </div>
                <div className='block lg:hidden'>
                    <button className='focus:outline-none' onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                <div className='hidden lg:block'>
                    <div className=' flex gap-x-[40px]'>
                            <button className='emergencyBtn font-[PoppinsBold] h-[51px] w-[200px] rounded-[30px] pt-1'><a href="">EMERGENCY</a></button>
                    
                    </div>
                </div>

            </div>
            <div>
                {isOpen ?
                    <div className='bg-black p-10'>
                        <div className='flex flex-col gap-y-[20px] font-[ProximaNovaLight] text-white text-[30px]'>
                        <a className='font-[PoppinsRegular] my-auto hover:text-[#d3d5d5]' href="#dangers">Know the Dangers</a>
                        <a className='font-[PoppinsRegular] my-auto hover:text-[#d3d5d5]' href="#prepare">How to Prepare</a>
                        <a className='font-[PoppinsRegular] my-auto hover:text-[#d3d5d5]' href="#faq">FAQ</a>
                        </div>
                        <div className=' flex justify-evenly gap-x-[40px] pt-[20px]'>
                            <a href=""></a>
                    </div>
                    </div>
                    : ""}
            </div>
        </>
  )
}

export default NavbarComponent
