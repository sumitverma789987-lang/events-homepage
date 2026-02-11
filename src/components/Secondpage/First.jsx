import React, { useRef, useState } from 'react'
import { Link } from 'react-router'
import Button from '../Common/Button'
import { Cale, Calender, Events, Janta, Location, Quote, Ticket } from '../Common/Icon'
import { Play } from "../Common/Icon";

const First = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const imgRef = useRef(null);

  const handlePlay = () => {
    if (imgRef.current) {
      setSize({
        width: imgRef.current.offsetWidth,
        height: imgRef.current.offsetHeight,
      });
    }
    setPlayVideo(true);
  };

  return (
    <div className='flex flex-col items-center justify-center mt-10 md:mt-20 lg:mt-45 px-10'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20 w-full max-w-7xl'>
        <img src="/assets/Event2.png" alt="" className='w-full lg:w-auto max-w-md lg:max-w-none' />
        <div className='flex flex-col items-start justify-center w-full lg:w-auto'>
          <div className='flex flex-row items-start justify-center font-normal gap-3 text-sm md:text-[16px] opacity-60'>
            <Link to="/"><h4>Home </h4> </Link>&gt;<h4>Username</h4>
          </div>
          <div className='flex flex-col min-[1300px]:flex-row items-start min-[1300px]:items-center gap-4 md:gap-6 xl:gap-20 justify-between mt-6 md:mt-10 w-full'>
            <h1 className='font-semibold text-3xl md:text-4xl lg:text-[48px] leading-none'>Jhone Doe</h1>
            <div className='flex flex-col lg:flex-row items-start ld:items-center justify-center gap-3 md:gap-5 w-full xl:w-auto'>
              <Button
                text="Unshow Journey of Feed"
                textColor="text-black leading-none text-sm md:text-base whitespace-nowrap"
                bgColor="bg-[#2C49FE1A]"
                padding="px-4 py-2 md:px-5 md:py-3"
                rounded="rounded-[23px]"
                font="font-semibold"
                hover="hover:bg-white hover:scale-105 transition-all hover:border-1 border-[#2C49FE] duration-500 ease-in-out hover:text-[#2C49FE]"
              />
              <Button
                text="Show Journey of Feed"
                textColor="text-white text-sm md:text-base whitespace-nowrap"
                bgColor="bg-[#2C49FE]"
                padding="px-4 py-2 md:px-5 md:py-2"
                rounded="rounded-[23px]"
                font="font-semibold"
                hover="hover:bg-white hover:scale-105 transition-all duration-500 hover:border-1 border-[#2C49FE] ease-in-out hover:text-[#2C49FE]"
              />
            </div>
          </div>
          <p className='text-sm md:text-[16px] font-normal opacity-60 mt-6 md:mt-10'>Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
          <div className='flex flex-wrap items-center justify-start gap-4 md:gap-6 lg:gap-10 mt-8 md:mt-20'>
            <div className='flex items-center justify-center gap-2 flex-row'>
              <Calender />
              <p className='opacity-60 font-normal text-sm md:text-[16px]'>10/02/2022</p>
            </div>
            <div className='flex items-center justify-center gap-2 flex-row'>
              <Location />
              <p className='opacity-60 font-normal text-sm md:text-[16px]'>Mumbai</p>
            </div>
            <div className='flex items-center justify-center gap-2 flex-row'>
              <Janta />
              <p className='opacity-60 font-normal text-sm md:text-[16px]'>1,080</p>
            </div>
            <div className='flex items-center justify-center gap-2 flex-row'>
              <Events />
              <p className='opacity-60 font-normal text-sm md:text-[16px]'>1,080</p>
            </div>
            <div className='flex items-center justify-center gap-2 flex-row'>
              <Ticket />
              <p className='opacity-60 font-normal text-sm md:text-[16px]'>1,080</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20 mt-12 md:mt-16 lg:mt-20 w-full max-w-7xl'>
        <div className='flex flex-col items-start justify-center w-full lg:w-auto order-2 lg:order-1'>
          <Quote />
          <p className='text-sm md:text-[16px] font-normal opacity-60 max-w-full lg:max-w-[600px] mt-6 md:mt-10'>Semper faucibus suscipit ultricies eleifend semper sit tellus gravida pretium. Cras cursus ut semper eleifend tortor lectus tristique turpis. Laoreet amet ultrices est lectus accumsan nibh cursus nunc. Faucibus orci, neque, pretium, massa volutpat convallis nisl pellentesque. Gravida in ultrices vitae tortor. Dignissim viverra volutpat neque gravida aliquet urna faucibus viverra vulputate. nibh cursus nunc. Faucibus orci, neque, pretium, massa volutpat convallis nisl pellentesque. Gravida in ultrices vitae tortor. Dignissim viverra volutpat neque gravida aliquet urna faucibus viverra vulputate.</p>
        </div>
        <div className="relative flex items-center justify-center overflow-hidden w-full lg:w-auto order-1 lg:order-2">
          {!playVideo ? (
            <div
              className="relative cursor-pointer inline-block w-full"
              onClick={handlePlay}
            >
              <img
                ref={imgRef}
                src="/assets/Event1.png"
                alt="Hub"
                className="block w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Play />
              </div>
            </div>
          ) : (
            <iframe
              style={{
                width: size.width,
                height: size.height,
                maxWidth: "100%",
              }}
              className='rounded-[30px]'
              src="https://www.youtube.com/embed/2ZszuNlNXsY?autoplay=1"
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default First