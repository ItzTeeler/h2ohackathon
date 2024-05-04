'use client'
import React, { useState } from 'react'

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
            <div className='bg-black h-[90px] flex justify-between items-center text-white px-[50px] py-[20px]'>
                <div>
                    <p className='font-[ProximaNovaLight] text-[40px]'>hi</p>
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
                    <div className=' flex gap-x-[50px] font-[ProximaNovaLight] text-[30px]'>
                        <a href="#about">about</a>
                        <a href="#skills">skills</a>
                        <a href="#projects">projects</a>
                        <a href="#contact">contact</a>

                    </div>
                </div>
                <div className='hidden lg:block'>
                    <div className=' flex gap-x-[40px]'>
                    <a href="">hi</a>
                    </div>
                </div>

            </div>
            <div>
                {isOpen ?
                    <div className='bg-black p-10'>
                        <div className='flex flex-col gap-y-[20px] font-[ProximaNovaLight] text-white text-[30px]'>
                            <a href="#about">about</a>
                            <a href="#skills">skills</a>
                            <a href="#projects">projects</a>
                            <a href="#contact">faq</a>
                        </div>
                        <div className=' flex justify-evenly gap-x-[40px] pt-[20px]'>
                            <a href="">hi</a>
                    </div>
                    </div>
                    : ""}
            </div>
        </>
  )
}

export default NavbarComponent
