import React from 'react'
import { Calender, Comment, Like } from '../Common/Icon'
import Comments from './Comments'
import { useState } from 'react'
const Post = () => {
    const [showComments, setShowComments] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(10)
    const [commentCount, setCommentCount] = useState(3)

    const handleLikeClick = () => {
        if (isLiked) {
            setIsLiked(false)
            setLikeCount(likeCount - 1)
        } else {
            setIsLiked(true)
            setLikeCount(likeCount + 1)
        }
    }


    return (
        <div className='flex flex-col items-center justify-between gap-4 md:gap-8 lg:gap-15 p md:py-4 lg:py-5 px-10 rounded-[20px] mt-6 md:mt-8 lg:mt-10 shadow-[0px_8px_35px_0px_#0000001A] mx-2 md:mx-4'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-15 w-full'>

                <div className='flex flex-col items-start justify-center w-full lg:w-auto'>
                    <div className='flex flex-row items-center justify-start w-full'>
                        <img src="./Assets/Ellipse/Ellipse3.png" className='scale-100 md:scale-125 lg:scale-150 m-4 md:m-6 lg:m-8' alt="" />
                        <div className='flex flex-col items-start justify-center'>
                            <h4 className='font-semibold text-[18px] md:text-[20px] lg:text-[24px]'>Username</h4>
                            <p className='font-normal text-[14px] md:text-[15px] lg:text-[16px] opacity-60'>Post event name</p>
                        </div>
                    </div>
                    <h4 className='font-semibold text-[18px] md:text-[20px] lg:text-[24px] mt-3 md:mt-4 lg:mt-5 px-2 md:px-0'>Fusce adipiscing nunc et tellus eu, tristique <br className='hidden md:block' /> sodales sit aliquet.</h4>
                    <div className='flex flex-row my-4 md:my-5 lg:my-6 px-2 md:px-0'>
                        <Calender />
                        <p className='text-[14px] md:text-[15px] lg:text-[16px] font-normal opacity-60'>10/02/2022</p>
                    </div>
                    <p className='text-[14px] md:text-[15px] lg:text-[16px] font-normal opacity-60 max-w-full md:max-w-[450px] lg:max-w-[500px] mb-4 lg:mb-5 px-2 md:px-0'>Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
                    <p className='text-[14px] md:text-[15px] lg:text-[16px] font-normal opacity-60 max-w-full md:max-w-[450px] lg:max-w-[500px] px-2 md:px-0'>Sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
                    <div className='flex flex-row items-center gap-4 md:gap-5 justify-start md:justify-center mt-5 md:mt-6 lg:mt-8 px-2 md:px-0'>
                        <button
                            className='flex items-center justify-center gap-2'
                            onClick={handleLikeClick}
                        >
                            <Like isLiked={isLiked} />
                            <p className='font-normal text-[14px] md:text-[15px] lg:text-[16px] opacity-60'>{likeCount}</p>
                        </button>
                        <button
                            className='flex items-center justify-center gap-2'
                            onClick={() => setShowComments(!showComments)}
                        >
                            <Comment />
                            <p className='font-normal text-[14px] md:text-[15px] lg:text-[16px] opacity-60'>{commentCount}</p>
                        </button>
                    </div>
                </div>

                <div className='grid grid-cols-2 relative gap-3 md:gap-4 lg:gap-5 grid-rows-2 w-full lg:w-auto px-2 md:px-0'>
                    <img src="./Assets/Postgrid4.png" className=' md:w-full md:h-auto object-cover rounded-lg' alt="" />
                    <img src="./Assets/Postgrid3.png" className=' md:w-full md:h-auto object-cover rounded-lg' alt="" />
                    <img src="./Assets/Postgrid2.png" className=' md:w-full md:h-auto object-cover rounded-lg' alt="" />
                    <img src="./Assets/Postgrid1.png" className='-mt-5 md:-mt-7 lg:-mt-9 w-full h-auto object-cover rounded-lg' alt="" />
                    <div className='flex flex-col items-center justify-center absolute bottom-6 md:bottom-8 lg:bottom-12 py-2 md:py-3 lg:py-4 px-4 md:px-5 lg:px-7 right-2 md:right-3 lg:right-4 rounded-[15px] md:rounded-[18px] lg:rounded-[20px] bg-white'>
                        <h1 className='text-[24px] md:text-[30px] lg:text-[36px] font-semibold opacity-60'>+15</h1>
                        <p className='font-normal text-[12px] md:text-[14px] lg:text-[16px] opacity-60'>more</p>
                    </div>
                </div>
            </div>
            {showComments && <div className='flex flex-col items-center justify-center w-full'>
                <span className='flex h-[1px] w-full max-w-[280px] md:max-w-[700px] lg:max-w-[1200px] bg-[#cccccc] mb-6 md:mb-8 lg:mb-10'>
                </span>
                <Comments commentCount={commentCount} setCommentCount={setCommentCount} />
            </div>}
        </div>
    )
}

export default Post