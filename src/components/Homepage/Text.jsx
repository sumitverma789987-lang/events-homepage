import React from "react";
import Button from "../Common/Button";
import { Cale, Locn, People } from "../Common/Icon";

const Text = () => {
    return (
        <div className="flex flex-col  mt-[200px] mb-25 items-baseline justify-center z-5 min-[1440px]:ml-60 ml-5 p-5  ">
            <h1 className="relative font-bold text-white text-left
               text-[32px] 
               md:text-[48px]
               lg:text-[64px]">
                Sed tortor in quisque morbi <br className="hidden md:block" />
                scelerisque etiam eu.

                <span
                    className="absolute bg-[#2C49FE]
               h-[4px] w-[180px] left-0 z-5
               md:h-[6px] md:w-[300px]
               lg:h-[8px] lg:w-[414px] lg:left-[373px]">
                </span>


                <span
                    className="absolute bg-[#01C8FF]
               h-[4px] w-[220px] left-0 z-3
               md:h-[6px] md:w-[340px]
               lg:h-[8px] lg:w-[470px] lg:left-[373px]">
                </span>
            </h1>

            <p className="mt-6 font-normal text-white text-left
              text-[14px] leading-relaxed
              md:text-[18px]
              lg:text-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur
                urna in dictum <br className="hidden md:block" />
                suscipit. Suspendisse maximus ipsum sem. Donec ut justo
                et leo congue lacinia vitae nec <br className="hidden lg:block" />
                arcu. Nunc elit elit, malesuada id suscipit cursus,
            </p>

            <div className="mt-8 flex   gap-4
                flex-row items-center md:gap-6
                lg:mt-10">
                <Button
                    text="Get Started"
                    textColor="text-white"
                    bgColor="bg-[rgba(44,73,254,1)]"
                    padding="px-5 py-2"
                    rounded="rounded-[23px]"
                    font="font-semibold"
                    hover='hover:bg-white hover:scale-105 transition-all duration-500 ease-in-out hover:text-[#2C49FE]' />

                <p className="font-normal  text-white cursor-pointer
                text-[16px]
                md:text-[18px]
                lg:text-[20px]">
                    LearnMore
                </p>
            </div>



            <div className="bg-[#2C49FEBD] mt-30  min-[900px]:rounded-[150px] rounded-4xl min-[900px]:p-5 px-5 py-5 min-[900px]:flex min-[900px]:flex-row    items-center justify-center">
                <div className=" flex flex-row items-center justify-center">

                    <Locn />

                    <div className="flex flex-col text-white mx-3  min-[900px]:my-0 my-3 ">
                        <p className="font-medium text-[20px]">Location</p>
                        <p className="font-normal text-[14px] opacity-50 leading-none whitespace-nowrap">
                            Search by city
                        </p>

                    </div>
                </div>
                <span className="h-[74px] w-[3px] min-[900px]:flex hidden bg-white min-[1000px]:mx-[50px]  mx-[20px]"></span>
                <div className=" flex flex-row items-center justify-center">

                    <Cale />
                    <div className="flex flex-col text-white mx-3 min-[900px]:my-0 my-3">
                        <p className="font-medium text-[20px]">Date</p>
                        <p className="font-normal text-[14px] opacity-50">09/23/2021</p>
                    </div>
                </div>
                <span className="h-[74px] w-[3px] min-[900px]:flex hidden bg-white min-[1000px]:mx-[50px] mx-[20px]"></span>
                <div className=" flex flex-row items-center justify-center">

                    <People />
                    <div className="flex flex-col text-white mx-3 min-[900px]:my-0 my-3 min-[900px]:mb-0  mb-9">
                        <p className="font-medium text-xl">Capicity</p>
                        <p className="font-normal text-[14px] opacity-50">500 people</p>
                    </div>
                </div>
                <span className="h-[74px] w-[3px] min-[900px]:flex hidden bg-white min-[1000px]:mx-[50px] mx-[20px]"></span>

                <Button
                    text="Go Check"
                    textColor="text-[rgba(44,73,254,1)]"
                    bgColor="bg-[rgb(255,255,255)]"
                    padding="px-9 py-4"
                    rounded="rounded-full"
                    font="font-bold"
                    textSize='text-[20px]'
                    hover='hover:bg-[#2C49FE] hover:scale-105 transition-all duration-500 ease-in-out hover:text-white' />
            </div>

        </div>
    );
};

export default Text;
