import React from 'react'
import Image from 'next/image'
import floodMaps from '@/assets/floodtrans.png'
import waterUpArrow from '@/assets/water-arrow-up-svgrepo-com.svg'
const ProductsComponent = () => {
    return (
        <div className='bg-[#96D4EC] grid grid-cols-2 p-[50px]'>
            <div className='border-r border-black pb-[50px] px-[50px]'>
                <p className='text-[2.5rem] font-[PoppinsBold]'>Know the Dangers</p>
                <div>
                    <Image src={floodMaps} alt='flood map' />
                </div>
            </div>
            <div className='p-[50px] font-[PoppinsLight] flex flex-col gap-y-[20px]'>
                <div>
                    <div className='flex gap-[10px] items-center'>
                        <Image className='w-[32px] h-[32px]' src={waterUpArrow} alt='water up arrow' />
                        <p className='font-[PoppinsBold] text-[32px]'>Hazard</p>
                    </div>
                    <p className='px-[40px]'>{"On average, more deaths occur due to flooding each year than from any other severe weather related hazard."}</p>
                </div>

                <div>
                    <div className='flex gap-[10px] items-center'>
                        <Image className='w-[32px] h-[32px]' src={waterUpArrow} alt='water up arrow' />
                        <p className='font-[PoppinsBold] text-[32px]'>Hazard</p>
                    </div>
                    <p className='px-[40px]'>{"Nearly half of all flood fatalities occur in vehicles."}</p>                
                </div>
                
                <div>
                    <div className='flex gap-[10px] items-center'>
                        <Image className='w-[32px] h-[32px]' src={waterUpArrow} alt='water up arrow' />
                        <p className='font-[PoppinsBold] text-[32px]'>Hazard</p>
                    </div>
                    <p className='px-[40px]'>{'Those living outside of mapped "high-risk" flood areas file nearly 25% of all flood insurance claims and receive 1/3rd of Federal Disaster Assistance aid.'}</p>
                </div>

                <div>
                    <div className='flex gap-[10px] items-center'>
                        <Image className='w-[32px] h-[32px]' src={waterUpArrow} alt='water up arrow' />
                        <p className='font-[PoppinsBold] text-[32px]'>Hazard</p>
                    </div>
                    <p className='px-[40px]'>{"An area's risk of flood can change over time due to new construction, changes in levee classification, or other environmental factors."}</p>
                </div>
            </div>

        </div>
    )
}

export default ProductsComponent
