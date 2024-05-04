import React from 'react'
import headerImg from '@/assets/headerImg.png'
import Image from 'next/image'

const HeaderComponent = () => {

    return (
        <div style={{
            backgroundImage: "rgb(29,31,33)",
            background: "linear-gradient(180deg, rgba(29,31,33,1) 0%, rgba(57,62,68,1) 73%)"
        }} className='h-full w-screen  overflow-hidden' >
            <div className='grid grid-cols-2 h-[500px] ml-[100px]'>
                <div className='col-span-1 my-auto'>
                    <p className='text-[54px] text-white font-semibold'>Understanding Flood Risks,</p>
                    <p className='text-[20px] text-white font-thin '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, impedit quam ratione explicabo totam maxime distinctio atque, voluptate voluptatem cupiditate beatae dignissimos, neque aliquid nesciunt eos voluptatibus officia maiores debitis?</p>
                </div>
                <div className='col-span-1 relative'>
                    <Image className=' h-auto w-[500px] absolute bottom-0 right-0 object-bottom object-right' src={headerImg} alt="header img" />
                </div>
            </div>
        </div>


    )
}

export default HeaderComponent
