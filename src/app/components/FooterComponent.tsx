import React from 'react'

const FooterComponent = () => {
    return (
        <div className='p-[50px]'>
            <p className='font-[PoppinsBold] text-[40px] me-10 font-bold cursor-pointer text-white'>H<span className='text-[#96D4EB]'><sub>2</sub></span>O+</p>
            <div className='flex gap-x-[10px] py-[10px]'>
                <p className='text-white font-[PoppinsBold] text-[20px]'>Emergency Contacts:</p>
                <div className='text-white pt-[5px]'>
                    <p>State-Federal Flood Operations Center: (800) 952-5530 or (916) 574-2619 </p>
                    <p>State Water Project Operations Center: (916) 574-2714 </p>
                    <p>Governor's Office of Emergency Services: (916) 845-8911 </p>
                    <p>Security and Emergency Management Program Contact: (916) 653-4268 </p>
                    <p>San Joaquin County OES (209) 953-6200 </p>
                </div>
            </div>
            <div className='flex flex-row justify-between'>
                <p className='font-[PoppinsLight] text-[16px] text-white'>All Rights Reserved © Blue Water Studios</p>
                <p className='font-[PoppinsLight] text-[16px] text-white'>Sponsored by CodeStack Academy</p>
            </div>
        </div>
    )
}

export default FooterComponent
