import React from 'react'
import Comments from './Comments'

const Gallery = () => {
  return (
    <div className='flex items-center   justify-center flex-col mt-20 px-10'>
      <div className='flex items-center relative'>

        <span
          className="absolute bg-[#2C49FE]
               h-[8px] w-[100px] z-5
               top-0 -left-15 ">
        </span>


        <span
          className="absolute bg-[#01C8FF]
                 h-[8px] w-[114px] z-3
                top-0 -left-15  ">
        </span>
      </div>

      <h1 className='font-semibold text-[48px]'>Gallery</h1>

      <div className="grid grid-cols-3 grid-rows-3 gap-4 max-w-330 max-h-256.5 mt-10 w-full">
        <div className="rounded-2xl overflow-hidden"><img src="/Assets/Gallery/Gallery1.png" alt=""
          className="w-full h-full object-cover" /></div>
        <div className="rounded-2xl overflow-hidden"><img src="/Assets/Gallery/Gallery2.png" alt=""
          className="w-full h-full object-cover" /></div>
        <div className="row-span-2 rounded-2xl overflow-hidden"><img src="/Assets/Gallery/Gallery3.png"
          alt="" className="w-full h-full object-cover" /></div>
        <div className="col-span-2 rounded-2xl overflow-hidden"><img src="/Assets/Gallery/Gallery4.png"
          alt="" className="w-full h-full object-cover" /></div>
        <div className="rounded-2xl overflow-hidden"><img src="/Assets/Gallery/Gallery5.png" alt=""
          className="w-full h-full object-cover" /></div>
        <div className="col-span-2 rounded-2xl overflow-hidden"><img src="/Assets/Gallery/Gallery6.png"
          alt="" className="w-full h-full object-cover" /></div>
      </div>
      <div className="flex flex-col items-center justify-center mt-15 mb-10">

        <div className='flex items-center relative  mb-5'>

          <span
            className="absolute bg-[#2C49FE]
               h-[8px] w-[100px] z-5
               top-0 -left-15 ">
          </span>


          <span
            className="absolute bg-[#01C8FF]
                 h-[8px] w-[114px] z-3
                top-0 -left-15  ">
          </span>
        </div>
        <h1 className='font-semibold text-[48px]'>Tell Us!</h1>
        <p className='text-sm md:text-[16px] font-normal text-center opacity-60 mt-6 max-w-[700px] md:mt-10'>Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
      </div>
    
    </div>
  )
}

export default Gallery