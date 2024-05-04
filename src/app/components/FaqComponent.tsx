import React from 'react'
import Image from 'next/image'
import floodMaps from '@/assets/floodtrans.png'
import waterUpArrow from '@/assets/water-arrow-up-svgrepo-com.svg'
import carIcon from '@/assets/car-side-svgrepo-com.svg'
import highRiskArea from '@/assets/danger-zone-svgrepo-com.svg'
import landScape from '@/assets/landscape-svgrepo-com.svg'


const FaqComponent = () => {



    return (
        <div className='text-white bg-[#1d1f21]  px-[50px] pb-[50px]' id='#prepare'>
            <div className='p-[50px] font-[PoppinsLight] flex flex-col gap-y-[20px] '>

                <p className='text-[2.5rem] font-[PoppinsBold] text-center'>Ways to be flood ready</p>

                <div>
                    <div className=' gap-[10px] '>
                        <p className='text-white font-[PoppinsBold] text-[32px]'>Be aware of your risk</p>
                        <p className='text-[#9ca3af]  font-[PoppinsLight] ml-[10px] '>{"Be aware of whether your residence falls within a flood-prone area, stay vigilant about weather predictions, and heed advice from local authorities."}</p>


                        <p className='ml-[10px] font-[PoppinsLight] text-[#9ca3af] '>Find your local evacuation map  <a target='_blank' className='text-white underline' href='https://sjmap.org/evacmaps/'>here</a>.</p>
                        <p className='ml-[10px] font-[PoppinsLight] text-[#9ca3af] '>Find San Joaquin Shelter nearby <a target='_blank' className='text-white underline' href='https://www.sjgov.org/department/oes/care-shelter'>here</a>.</p>





                    </div>
                </div>

                <div>
                    <div className=' gap-[10px] '>
                        <p className='text-white font-[PoppinsBold] text-[32px]'>Be prepared</p>
                        <p className='text-[#9ca3af] font-[PoppinsLight]  ml-[10px] '>{"Ensure you always have an emergency evacuation kit prepared, anticipate the need to evacuate promptly, maintain a household inventory containing duplicates of essential documents, and establish a plan outlining your destination and arrangements for your pets during emergencies."}</p>
                    </div>
                </div>

                <div>
                    <div className=' gap-[10px] '>
                        <p className='text-white font-[PoppinsBold] text-[32px]'>Take action</p>
                        <p className='text-[#9ca3af] font-[PoppinsLight]  ml-[10px]'>{`Promptly evacuate upon receiving advisories to do so. Additionally, it's important to note that typical homeowners' insurance policies do not include coverage for flood-related damages. Therefore, it's advisable to explore the option of acquiring flood insurance.`}</p>
                    </div>
                </div>


            </div>



        </div>



    )
}

export default FaqComponent
