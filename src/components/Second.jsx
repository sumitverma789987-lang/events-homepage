import React, { useState, useRef } from "react";
import Box from './Box'
import { Help, Info, Play, Share } from "./Icon";

const Second = () => {
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

        <div className="flex min-h-screen flex-col min-[1300px]:flex-row items-center justify-center  px-20 2xl:px-60  gap-15 xl:gap-22 p-5 ">
            <div className="relative flex items-center justify-center overflow-hidden">
                {!playVideo ? (
                    <div
                        className="relative cursor-pointer inline-block"
                        onClick={handlePlay}
                    >
                        <img
                            ref={imgRef}
                            src="/assets/Hub.png"
                            alt="Hub"
                            className="block max-w-full h-auto"
                        />

                        {/* Play Icon */}
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
                        src="https://www.youtube.com/embed/2ZszuNlNXsY?autoplay=1"
                        title="YouTube video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                )}
            </div>




            <div className="w-full lg:w-1/2 flex flex-col  justify-center items-start ">
                <div className='flex  flex-col relative  '>
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

                    <h1 className='text-[28px] md:text-[40px] lg:text-[48px] font-bold mt-8'> What make us special ?</h1>
                    <p className='text-[14px] md:text-[16px]  font-normal opacity-70 max-w-[633px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,</p>

                </div>
                <div className="flex flex-col    w-full   justify-center items-center min-[1300px]:items-start  ">
                    <div className='flex flex-col  justify-center items-center '>
                        <div className='flex md:flex-row  gap-8 flex-col items-center mt-5  justify-center '>

                            <Box
                                image={<Share />}
                                title="Sharing"
                                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in "
                            />
                            <Box
                                image={<Info />}
                                title="Info"
                                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in " />
                        </div>

                        <div className='flex flex-row mt-5 items-center lg:items-center justify-center'>

                            <Box
                                image={<Help />
                                }
                                title="Help"
                                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in " />
                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Second
