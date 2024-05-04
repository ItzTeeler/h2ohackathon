import React from 'react'

const ProductsComponent = () => {
    return (
        <div className='bg-[#96D4EC] grid grid-cols-2 p-[40px]'>
            <div className='border-r border-black pb-[50px] px-[50px]'>
                <p className='text-[2.5rem] font-bold'>Know the Dangers</p>
            </div>
            <div className='p-[50px]'>
                <p>On average, more deaths occur due to flooding each year than from any other severe weather related hazard.</p>
                <p>Nearly half of all flood fatalities occur in vehicles.</p>
                <p>Those living outside of mapped "high-risk" flood areas file nearly 25% of all flood insurance claims and receive 1/3rd of Federal Disaster Assistance aid.</p>
                <p>An area's risk of flood can change over time due to new construction, changes in levee classification, or other environmental factors.</p>

            </div>

        </div>
    )
}

export default ProductsComponent
