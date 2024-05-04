import React from 'react'
import headerImg from '@/assets/headerImg.png'
import Image from 'next/image'

const HeaderComponent = () => {

    return (
        <div style={{

        }} className='h-full w-screen bg-[#1d1f21]  overflow-hidden' >
            <div className='grid grid-cols-2 h-[500px] ml-[100px]'>
                <div className='col-span-1 my-auto'>
                    <p className='text-[54px] text-white font-semibold'>Understanding Flood Risks,</p>
                    <p className='text-[20px] text-white font-thin '>
                        From 2003 to 2012, total flood insurace claims average nearly 4 billion dollars. In the past
                    </p>
                </div>
                <div className='col-span-1 relative'>
                    <Image className=' h-auto w-[500px] absolute bottom-0 right-0 object-bottom object-right' src={headerImg} alt="header img" />
                </div>
            </div>
        </div>


    )
}

export default HeaderComponent
