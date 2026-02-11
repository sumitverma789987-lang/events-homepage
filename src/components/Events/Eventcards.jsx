import React from 'react'
import eventImage from '/assets/Eventscard.png'
import { Calender, Janta, Location } from '../Common/Icon'
import Button from '../Common/Button'

const Eventcards = () => {
    return (
        <div className=" flex flex-col items-center justify-center mx-auto px-4 py-12">
            <div className='flex flex-col relative items-center justify-center'>

                <span
                    className=" absolute top-0 left-[166px] bg-[#2C49FE]
                              w-[120px]  md:w-[166px]
                              h-[6px] md:h-[8px] z-5">
                </span>


                <span
                    className=" absolute top-0 bg-[#01C8FF]
                                w-[140px] md:w-[188px]
                              h-[6px] md:h-[8px] z-3">
                </span>
                <h2 className=" font-bold relative text-[48px] text-center mb-8">
                    Choose your next event
                </h2>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-300  gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9,].map((index) => (
                    <div key={index} className="bg-white rounded-[30px] flex flex-col items-start  justify-center  p-8 border border-[#00000033]/80  hover:shadow-[0px_8px_35px_0px_rgba(0,0,0,0.1)]  hover:border-0 transition-all duration-200 ease-in-out">

                        <img
                            src={eventImage}
                            alt="Event"
                            className=" w-full rounded-[20px] hover:rounded-none  transition-all duration-200 ease-in-out"
                        />


                        <div className="p-4 flex flex-col gap-2">
                            <h3 className="font-semibold text-[24px] mb-3">
                                Lorem ipsum dolor sit de
                            </h3>


                            <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                                <span><Calender /></span>
                                <span>10/02/2022</span>
                            </div>


                            <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                                <span><Location /></span>
                                <span>Mumbai</span>
                            </div>

                            <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                                <span><Janta /></span>
                                <span>1660</span>
                            </div>
                            <Button
                                text="Go Check"
                                textColor="text-white"
                                bgColor="bg-[#2C49FE]"
                                padding= "px-6 py-2" 
                                rounded="rounded-[23px]"
                                font="font-semibold"
                                hover="hover:bg-white max-w-30 hover:scale-105 transition-all duration-500  hover:border-1 hover:border-[#2C49FE] ease-in-out hover:text-[#2C49FE]"
                            />


                           
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Eventcards