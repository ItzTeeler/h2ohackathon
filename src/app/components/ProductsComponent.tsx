import React from 'react'
import Image from 'next/image'
import floodMaps from '@/assets/floodtrans.png'
import waterUpArrow from '@/assets/water-arrow-up-svgrepo-com.svg'
import carIcon from '@/assets/car-side-svgrepo-com.svg'
import highRiskArea from '@/assets/danger-zone-svgrepo-com.svg'
import landScape from '@/assets/landscape-svgrepo-com.svg'
const ProductsComponent = () => {
    return (
        <div className='bg-[#96D4EC] grid lg:grid-cols-2 p-[20px] lg:p-[50px]' id='dangers'>
            <div className='lg:border-r lg:border-black pb-[20px] lg:pb-0 lg:px-[50px] flex flex-col justify-between'>
                <p className='text-[2.5rem] font-[PoppinsBold]'>Know the Dangers</p>
                <div className='hidden lg:block'>
                    <Image src={floodMaps} alt='flood map' />
                </div>
            </div>
            <div className='pt-[20px] lg:pt-0 lg:px-[20px] lg:p-[50px] font-[PoppinsLight] flex flex-col gap-y-[20px]'>
                <div>
                    <div className='flex gap-[10px] items-center'>
                        <Image className='w-[32px] h-[32px]' src={waterUpArrow} alt='Water Up Arrow Icon' />
                        <p className='font-[PoppinsBold] text-[32px]'>Hazard</p>
                    </div>
                    <p className='px-[50px]'>{"On average, more deaths occur due to flooding each year than from any other severe weather related hazard."}</p>
                </div>

                <div>
                    <div className='flex gap-[10px] items-center'>
                        <Image className='w-[32px] h-[32px]' src={carIcon} alt='Car Icon' />
                        <p className='font-[PoppinsBold] text-[32px]'>Vehicles</p>
                    </div>
                    <p className='px-[50px]'>{"Nearly half of all flood fatalities occur in vehicles."}</p>                
                </div>
                
                <div>
                    <div className='flex gap-[10px] items-center'>
                        <Image className='w-[32px] h-[32px]' src={highRiskArea} alt='High Risk Area Icon' />
                        <p className='font-[PoppinsBold] text-[32px]'>High-Risk</p>
                    </div>
                    <p className='px-[50px]'>{'Those living outside of mapped "high-risk" flood areas file nearly 25% of all flood insurance claims and receive 1/3rd of Federal Disaster Assistance aid.'}</p>
                </div>

                <div>
                    <div className='flex gap-[10px] items-center'>
                        <Image className='w-[32px] h-[32px]' src={landScape} alt='Landscape Changes Icon' />
                        <p className='font-[PoppinsBold] text-[32px]'>Landscape Changes</p>
                    </div>
                    <p className='px-[50px]'>{"An area's risk of flood can change over time due to new construction, changes in levee classification, or other environmental factors."}</p>
                </div>
            </div>

        </div>
    )
}

export default ProductsComponent
