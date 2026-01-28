import React from 'react'
function Ecard({ image }) {
  return (
    <div className="flex px-2 py-3 flex-col justify-between  max-w-84.75  transition-all duration-300 ease-in-out
  hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:cursor-pointer rounded-md ">
      <img className="xl:w-78.25 object-cover h-43.25 " src={image} alt="" />
      <span className="text-[14px] font-normal ml-3 mt-3">09/23/2021</span>
      <h3 className="text-[24px] font-medium ml-3">Lorem ipsum</h3>
      <p className="text-[16px] font-normal w-[90%] ml-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in </p>
    </div>
  );
}

export default Ecard;