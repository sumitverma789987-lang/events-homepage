import React from "react";
import Button from "./Button";

const Text = () => {
    return (
        <div className="flex flex-col  items-baseline justify-center z-5 min-[1440px]:ml-60 ml-20  ">
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

            <div className="mt-8 flex flex-col items-start gap-4
                md:flex-row md:items-center md:gap-6
                lg:mt-10">
                <Button
                    text="Get Started"
                    textColor="text-white"
                    bgColor="bg-[rgba(44,73,254,1)]"
                    padding="px-5 py-2"
                    rounded="rounded-[23px]"
                    font="font-semibold"
                    hover='hover:bg-white hover:scale-105 transition-all duration-200 ease-in-out hover:text-[#2C49FE]'/>

                <p className="font-normal text-white
                text-[16px]
                md:text-[18px]
                lg:text-[20px]">
                    Learn more
                </p>
            </div>



            <div className="bg-[#2C49FEBD] mt-30  min-[900px]:rounded-[150px] rounded-4xl min-[900px]:p-5 px-5 py-5 min-[900px]:flex min-[900px]:flex-row    items-center justify-center">
                <div className=" flex flex-row items-center justify-center">

                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 16.7917C17.6401 16.7917 19.375 15.0569 19.375 12.9167C19.375 10.7766 17.6401 9.04175 15.5 9.04175C13.3599 9.04175 11.625 10.7766 11.625 12.9167C11.625 15.0569 13.3599 16.7917 15.5 16.7917Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.4993 2.58337C12.7588 2.58337 10.1305 3.67206 8.19258 5.60994C6.2547 7.54781 5.16602 10.1761 5.16602 12.9167C5.16602 15.3605 5.68527 16.9596 7.10352 18.7292L15.4993 28.4167L23.8952 18.7292C25.3134 16.9596 25.8327 15.3605 25.8327 12.9167C25.8327 10.1761 24.744 7.54781 22.8061 5.60994C20.8682 3.67206 18.2399 2.58337 15.4993 2.58337V2.58337Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                    <div className="flex flex-col text-white mx-3  min-[900px]:my-0 my-3 ">
                    <p className="font-medium text-[20px]">Location</p>
                    <p className="font-normal text-[14px] opacity-50">Search by city</p>

                </div>
                </div>
                <span className="h-[74px] w-[3px] min-[900px]:flex hidden bg-white min-[1000px]:mx-[50px]  mx-[20px]"></span>
                <div className=" flex flex-row items-center justify-center">

                <svg height="31px" width="31px" viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" /></svg>
                    <div className="flex flex-col text-white mx-3 min-[900px]:my-0 my-3">
                    <p className="font-medium text-[20px]">Date</p>
                    <p className="font-normal text-[14px] opacity-50">09/23/2021</p>
                </div>
                </div>
                <span className="h-[74px] w-[3px] min-[900px]:flex hidden bg-white min-[1000px]:mx-[50px] mx-[20px]"></span>
                <div className=" flex flex-row items-center justify-center">

                <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.197 23.19L19.397 16.785C19.2836 15.8778 18.8427 15.0432 18.1572 14.4383C17.4716 13.8333 16.5887 13.4996 15.6745 13.5H12.9195C12.0056 13.5003 11.1233 13.8342 10.4383 14.4391C9.75331 15.044 9.31277 15.8782 9.19945 16.785L8.3982 23.19C8.35423 23.5419 8.38562 23.8991 8.4903 24.2379C8.59498 24.5768 8.77054 24.8894 9.00533 25.1552C9.24013 25.421 9.52878 25.6338 9.85211 25.7794C10.1754 25.9251 10.5261 26.0003 10.8807 26H17.7157C18.0702 26.0001 18.4207 25.9248 18.7439 25.779C19.0671 25.6333 19.3556 25.4205 19.5902 25.1547C19.8249 24.889 20.0003 24.5764 20.1049 24.2376C20.2095 23.8989 20.2409 23.5418 20.197 23.19V23.19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.2988 8.5C16.3699 8.5 18.0488 6.82107 18.0488 4.75C18.0488 2.67893 16.3699 1 14.2988 1C12.2278 1 10.5488 2.67893 10.5488 4.75C10.5488 6.82107 12.2278 8.5 14.2988 8.5Z" stroke="white" stroke-width="2" />
                    <path d="M4.29883 12.25C5.67954 12.25 6.79883 11.1307 6.79883 9.75C6.79883 8.36929 5.67954 7.25 4.29883 7.25C2.91812 7.25 1.79883 8.36929 1.79883 9.75C1.79883 11.1307 2.91812 12.25 4.29883 12.25Z" stroke="white" stroke-width="2" />
                    <path d="M24.2988 12.25C25.6795 12.25 26.7988 11.1307 26.7988 9.75C26.7988 8.36929 25.6795 7.25 24.2988 7.25C22.9181 7.25 21.7988 8.36929 21.7988 9.75C21.7988 11.1307 22.9181 12.25 24.2988 12.25Z" stroke="white" stroke-width="2" />
                    <path d="M4.29906 16H3.91656C3.32476 15.9999 2.75212 16.2098 2.30053 16.5923C1.84893 16.9747 1.54766 17.505 1.45031 18.0887L1.03406 20.5887C0.974323 20.9469 0.993334 21.3138 1.08977 21.6639C1.1862 22.014 1.35775 22.3389 1.59247 22.616C1.82719 22.893 2.11945 23.1156 2.44892 23.2683C2.7784 23.421 3.13718 23.5 3.50031 23.5H8.04906" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M24.2988 16H24.6813C25.2731 15.9999 25.8458 16.2098 26.2974 16.5923C26.749 16.9747 27.0502 17.505 27.1476 18.0887L27.5638 20.5887C27.6236 20.9469 27.6046 21.3138 27.5081 21.6639C27.4117 22.014 27.2401 22.3389 27.0054 22.616C26.7707 22.893 26.4784 23.1156 26.149 23.2683C25.8195 23.421 25.4607 23.5 25.0976 23.5H20.5488" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
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
                    hover='hover:bg-[#2C49FE] hover:scale-105 transition-all duration-200 ease-in-out hover:text-white' />
            </div>

        </div>
    );
};

export default Text;
