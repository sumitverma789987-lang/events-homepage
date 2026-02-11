import React from 'react'
import bgImage from '/Assets/bgimage.png'
import { Awards, Participants, Speakers, Topics } from '../Common/Icon'

const Third = () => {
    return (
        <div
            className="flex flex-col inset-0 items-center text-white justify-center  bg-center bg-cover bg-no-repeat p-10 "
            style={{
                backgroundImage: `
      linear-gradient(#2C49FECC, #2C49FECC),
      url(${bgImage})
    `
            }}
        >


            <h1 className='md:text-[48px] text-[35px]  font-bold   text-center'>Lorem ipsum dolor sit amet,<br /> consectetur</h1>
            <p className='text-[16px]   font-normal text-center  mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. <br /> Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec </p>

            <div className='flex flex-col min-[450px]:flex-row items-center justify-center gap-10 min-[700px]:gap-20 min-[900px]:gap-45 mt-20 '>
                <div className='flex flex-col items-center justify-center sm:scale-100 scale-90'>
                    <Participants />
                    <h1 className='font-bold text-[35px]'>8800</h1>
                    <p className='font-normal text-[18px]'>PARTICIPANTS</p>
                </div>
                <div className='flex flex-col items-center justify-center sm:scale-100 scale-90'>
                    <Topics />
                    <h1 className='font-bold text-[35px]'>300</h1>
                    <p className='font-normal text-[18px]'>TOPICS</p>
                </div><div className='flex flex-col items-center justify-center sm:scale-100 scale-90'>
                    <Speakers />
                    <h1 className='font-bold text-[35px]'>50</h1>
                    <p className='font-normal text-[18px]'>SPEAKERS</p>
                </div><div className='flex flex-col items-center justify-center sm:scale-100 scale-90'>
                    <Awards />
                    <h1 className='font-bold text-[35px]'>30</h1>
                    <p className='font-normal text-[18px]'>AWARDS</p>
                </div>
            </div>
        </div>






    )
}

export default Third