import React from 'react'
import Image from 'next/image'
import { EarthComponent } from './EarthComponent'

const FAQsComponent = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 mb-[125px]' id='faq'>
      <div className='ps-[100px] mt-[75px]'>
        <p className='text-[40px] text-white font-semibold font-[PoppinsBold] mb-14'>FAQ</p>
        <div className='grid grid-cols-2'>
          <div className='me-10'>
            <p className='text-[24px] text-white font-semibold font-[PoppinsBold] mb-3'>What is a levee?</p>
            <p className='text-[#9ca3af] font-[PoppinsRegular]'>{"A levee is a man-made structure designed and constructed in accordance with sound engineering practices to contain, control, or divert the flow of water so as to provide protection from flooding for flows up to a certain amount."}</p>
          </div>
          <div>
            <p className='text-[24px] text-white font-semibold font-[PoppinsBold] mb-3'>{'What is "Residual Risk?"'}</p>
            <p className='text-[#9ca3af] font-[PoppinsRegular]'>{"Continued flood management improvements can't eliminate all risks in flood-prone areas. Levee systems offer protection, but residual risk remains from potential floods exceeding design or system failures due to various factors."}</p>
          </div>
          <div className='mt-[30px]'>
            <p className='text-[24px] text-white font-semibold font-[PoppinsBold] mb-3'>{'Main flood causes?'}</p>
            <p className='text-[#9ca3af] font-[PoppinsRegular]'>{"Heavy or prolonged rainfall, rapid melting of snow or ice, ice jams in rivers, storm surges from tropical cyclones, and dam or levee failures are some common causes of floods."}</p>
          </div>

        </div>
      </div>


      <div className='hidden lg:block'>
        <EarthComponent />
      </div>

    </div>
  )
}

export default FAQsComponent
