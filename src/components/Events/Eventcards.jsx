import React from 'react'
import eventImage from '/Assets/Eventscard.png'
import { Calender, Janta, Location } from '../Common/Icon'

const Eventcards = () => {
    return (
        <div className=" flex flex-col items-center justify-center mx-auto px-4 py-12">
       
            <h2 className="text-3xl font-semibold text-center mb-8">
                Choose your next event
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-300  gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9,].map((index) => (
                    <div key={index} className="bg-white rounded-[30px] flex flex-col items-start  justify-center p-8 border  shadow-md">
       
                        <img
                            src={eventImage}
                            alt="Event"
                            className=" w-full rounded-[20px]  "
                        />

               
                        <div className="p-4 flex flex-col gap-2">
                            <h3 className="font-semibold text-lg mb-3">
                                Lorem ipsum dolor sit de
                            </h3>

                  
                            <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                                <span><Calender/></span>
                                <span>10/02/2022</span>
                            </div>

                
                            <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                                <span><Location/></span>
                                <span>Mumbai</span>
                            </div>

                            <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                                <span><Janta/></span>
                                <span>L660</span>
                            </div>

                           
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                                Go Check
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Eventcards