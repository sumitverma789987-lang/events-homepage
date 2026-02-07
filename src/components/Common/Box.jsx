import React from "react";

function Box({ image, title, info, margin }) {
    return (
        <div className={`flex  items-center justify-center relative bg-white max-w-65 ${margin} `}>
            <div className="pt-12 w-full cursor-pointer flex flex-col justify-end
             text-center py-1 mt-5 hover:text-white hover:bg-[#2C49FE] duration-600
              ease-in-out bg-white text-[#2D3CAE] border border-[#2D3CAE] items-center px-5  rounded-sm z-10">
                <h4 className="font-medium text-[25px] leading-6 ">{title}</h4>
                <p className="font-normal text-[16px]  p-3 ">{info}</p>
                <div className="flex absolute -top-5 h-19.75 w-19.75 justify-center items-center
                 bg-white rounded-full border-[#2C49FE] border-2">
                    <div className="rounded-full">{image}</div>
                </div>
            </div>
        </div >
    );
}

export default Box;