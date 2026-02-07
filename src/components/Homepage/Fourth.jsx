import React from 'react'
import Ecard from '../Common/Ecard'

const Fourth = () => {
    return (
        <div className='flex flex-col min-[1200px]:flex-row min-[1200px]:items-center items-start  justify-center mt-40 mx-4 md:mx-10 lg:mx-20 gap-12 p-5 '>
            <div className='flex flex-col '>
                <span
                    className="absolute bg-[#2C49FE]
              w-[120px] md:w-[166px]
              h-[6px] md:h-[8px] z-5">
                </span>


                <span
                    className="absolute bg-[#01C8FF]
                w-[140px] md:w-[188px]
              h-[6px] md:h-[8px] z-3">
                </span>
                <h1 className='text-[48px] font-bold my-4'>Explore our <br />latest events</h1>
                <p className='text-[16px] font-normal max-w-[543px] opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu.</p>
                <h4 className='font-bold text-[16px] cursor-pointer'>Learn More</h4>
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-center justify-center'>
                <Ecard
                    image="/assets/card1.png" />

                <Ecard
                    image="/assets/card2.png" />

            </div>

        </div>
    )
}

export default Fourth