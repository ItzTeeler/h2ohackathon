import React from 'react'

const FooterComponent = () => {
    return (
        <div className='px-[100px] py-[25px] bg-[#1d1f21] navbg'>
            <p className='font-[PoppinsBold] text-[40px] me-10 font-bold cursor-pointer text-white'>H<span className='text-[#96D4EB]'><sub>2</sub></span>O+</p>
            <div className='flex flex-row justify-between'>
                <p className='font-[PoppinsLight] text-[16px] text-white'>All Rights Reserved © Blue Water Studios</p>
                <p className='font-[PoppinsLight] text-[16px] text-white'>Sponsored by CodeStack Academy</p>
            </div>
        </div>
    )
}

export default FooterComponent
