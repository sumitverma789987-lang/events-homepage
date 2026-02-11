import React from 'react'
import { Link } from 'react-router'
import Button from '../Common/Button'
Link

const Profile = () => {
    return (
        <div className='mt-35 flex flex-col items-center  justify-center   px-10'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20 w-full max-w-7xl'>
                <img src="./assets/Profile1.png" alt="" />
                <div className='flex flex-col items-start justify-center w-full lg:w-auto'>
                    <div className='flex flex-row items-start justify-center font-normal gap-3 text-sm md:text-[16px] opacity-60'>
                        <Link to="/"><h4>Home </h4> </Link>&gt;<h4>Feed</h4>
                    </div>
                    <div className='flex flex-col min-[1300px]:flex-row items-start min-[1300px]:items-center gap-4 md:gap-6 xl:gap-20 justify-between mt-6 md:mt-10 w-full'>
                        <h1 className='font-semibold text-3xl md:text-4xl lg:text-[48px] leading-none'>Jhone Doe</h1>
                    </div>
                    <p className='text-sm md:text-[16px] font-normal opacity-60 mt-6 md:mt-10'>Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>

                    <h5 className='font-semibold text-[16px] opacity-60 mt-8'>Following Events :</h5>

                    <div className='flex  flex-col min-[1300px]:flex-row gap-5 items-start lg:items-center mt-5 justify-center'>
                        <div className='flex flex-row items-center gap-5 justify-center rounded-[20px] shadow-[0px_8px_35px_0px_#0000001A] p-3'>
                            <img src="./assets/Events1.png" alt="" />
                            <div className='flex flex-col items-start justify-center gap-3'>
                                <h4 className='text-[16px] font-bold'>Augue etiam</h4>
                                <p className='font-normal text-[12px] text-[#666666]'>Quis et id urna sagittis. <br /> Enim lacus, felis, libero sed <br /> nisl vitae blandit sociis.</p>

                            </div>

                        </div>
                        <div className='flex flex-col sm:flex-row gap-5'>

                            <div className='flex flex-row items-center gap-5 :justify-center rounded-[20px] shadow-[0px_8px_35px_0px_#0000001A] p-3'>
                                <img src="./assets/Events2.png" alt="" />
                                <div className='flex flex-col items-start justify-center gap-3'>
                                    <h4 className='text-[16px] font-bold'>Augue etiam</h4>
                                    <p className='font-normal text-[12px] text-[#666666]'>Quis et id urna sagittis. <br /> Enim lacus, felis, libero sed <br /> nisl vitae blandit sociis.</p>

                                </div>

                            </div>
                            <div className='flex items-center justify-center bg-[#eaedff] rounded-[20px] flex-col px-10 py-7'>
                                <h1 className='text-[36px] font-semibold opacity-60'>+15</h1>
                                <p className='font-normal text-[16px] opacity-60'>more</p>

                            </div>
                        </div>


                    </div>
                </div>

            </div>


        </div>
    )
}

export default Profile