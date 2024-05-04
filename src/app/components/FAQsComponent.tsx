import React from 'react'
import Image from 'next/image'
import { EarthComponent } from './EarthComponent'

const FAQsComponent = () => {
  return (
    <div className='grid grid-cols-2'>
      <div className='ps-[100px] mt-[50px]'>
        <p className='text-[40px] text-white font-semibold font-[PoppinsBold] mb-10'>FAQ</p>
        <div className='grid grid-cols-2'>
          <div className='me-10'>
            <p className='text-[24px] text-white font-semibold font-[PoppinsBold] mb-3'>What is a levee?</p>
            <p className='text-white font-[PoppinsRegular]'>{"A levee is a man-made structure designed and constructed in accordance with sound engineering practices to contain, control, or divert the flow of water so as to provide protection from flooding for flows up to a certain amount."}</p>
          </div>
          <div>
            <p className='text-[24px] text-white font-semibold font-[PoppinsBold] mb-3'>{'What is "Residual Risk?"'}</p>
            <p className='text-white font-[PoppinsRegular]'>{"A levee is a man-made structure designed and constructed in accordance with sound engineering practices to contain, control, or divert the flow of water so as to provide protection from flooding for flows up to a certain amount."}</p>
          </div>
          <div>
            <p className='text-[24px] text-white font-semibold font-[PoppinsBold] mb-3'>{'What is "Residual Risk?"'}</p>
            <p className='text-white font-[PoppinsRegular]'>{"A levee is a man-made structure designed and constructed in accordance with sound engineering practices to contain, control, or divert the flow of water so as to provide protection from flooding for flows up to a certain amount."}</p>
          </div>
            
        </div>
      </div>

      <EarthComponent/>
    </div>
  )
}

export default FAQsComponent
