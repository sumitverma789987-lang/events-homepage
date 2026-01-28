import React from "react";
import Form from "./Common/Form";

const Fifth = () => {
  return (
    <div
      className="
        flex flex-col lg:flex-row items-center justify-center gap-32  min-[1500px]:mx-60 min-[1300px]:mx-20 mx-10   mt-40 "
    >

      <div className="  flex justify-center">
        <img
          src="/assets/pillimage.png"
          alt="pill"
          
        />
      </div>

      <div className="  flex flex-col gap-5 relative">
      
        <div className="relative mb-3">
          <span
            className="
              absolute top-0 left-0
              bg-[#2C49FE]
              w-[120px] sm:w-[160px]
              h-[6px] sm:h-[8px]
              z-10
            "
          ></span>

          <span
            className="
              absolute top-0 left-0
              bg-[#01C8FF]
              w-[140px] sm:w-[190px]
              h-[6px] sm:h-[8px]
              z-0
            "
></span>
        </div>

   
        <h1
          className="font-bold text-[32px] sm:text-[40px] lg:text-[48px]">
          Join Us !
        </h1>

     
        <p
          className="font-normal text-[14px] sm:text-[15px] lg:text-[16px] max-w-full sm:max-w-[480px] opacity-70"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
          Donec ut justo et leo congue.
        </p>

   
        <h3 className="font-bold text-[24px] sm:text-[28px] lg:text-[35px]">
          Sign Up
        </h3>

     
        <Form />
      </div>
    </div>
  );
};

export default Fifth;
