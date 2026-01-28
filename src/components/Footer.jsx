import React from 'react'
import { Facebook, Insta, Twitter } from './Icon'

const Footer = () => {
    return (
        <footer className='w-full bg-black mt-20 pb-10 pt-20 text-white px-10 '>
            <div
                className="   flex flex-col lg:flex-row mb-15  items-start justify-between gap-10  lg:px-20 xl:px-40 2xl:px-60 "
            >

                <div className=' flex flex-col items-start gap-5 justify-center'>
                    <div className='flex flex-row items-center  justify-center'>
                        <img src="/assets/logo1.png" className="scale-80" alt="logo" />
                        <p className="text-4xl font-bold text-[#2c49fe]">
                            Events<span className="text-[#01c8ff]">Free</span>
                        </p>
                    </div>
                    <p className='font-normal text-[14px] w-[320px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. c </p>
                    <div className='flex items-center justify-center mt-5 gap-4'>
                        < Insta />
                        <Facebook />
                        <Twitter />

                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-start justify-between gap-19 '>
                    <div className='flex flex-row items-start justify-between gap-10'>
                        <ul className='gap-2  flex flex-col'>
                            <h4 className='text-[14px] font-bold'>SERVICES</h4>
                            <li className='font-normal text-[12px] cursor-pointer'>About</li>
                            <li className='font-normal text-[12px] cursor-pointer'>News</li>
                            <li className='font-normal text-[12px] cursor-pointer'>ullamcorper</li>
                            <li className='font-normal text-[12px] cursor-pointer'>Contact</li>

                        </ul>
                        <ul className='gap-2  flex flex-col'>
                            <h4 className='text-[14px] font-bold'>EVENTS</h4>
                            <li className='font-normal text-[12px] cursor-pointer'>ullamcorper</li>
                            <li className='font-normal text-[12px] cursor-pointer'>ullamcorper</li>
                            <li className='font-normal text-[12px] cursor-pointer'>ullamcorper</li>
                            <li className='font-normal text-[12px] cursor-pointer'>ullamcorper</li>


                        </ul>
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <h4 className='text-[14px] font-bold'>GALLERY</h4>
                        <div className="grid grid-cols-3  gap-4">


                            <img
                                src="/assets/image1.png"
                                alt="gallery1"
                                className="  object-cover rounded-md"
                            />

                            <img
                                src="/assets/image2.png"
                                alt="gallery2"
                                className="  object-cover rounded-md"
                            />


                            <img
                                src="/assets/image3.png"
                                alt="gallery3"
                                className="  object-cover rounded-md"
                            />


                            <img
                                src="/assets/image4.png"
                                alt="gallery4"
                                className=" object-cover rounded-md"
                            />

                            <img
                                src="/assets/image5.png"
                                alt="gallery5"
                                className="  object-cover rounded-md"
                            />


                            <div className="  bg-[#2D3CAE87] flex items-center justify-center rounded-md cursor-pointer hover:scale-105 transition">
                                <p className="text-white font-bold text-[12px]">
                                    Show <br /> More
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <p className=" lg:text-center text-left text-[12px] font-normal">
                © Credits of companyName belong to companyName.
            </p>
        </footer>
        
    )
}

export default Footer