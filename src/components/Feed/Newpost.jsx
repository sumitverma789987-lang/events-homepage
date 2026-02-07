import React, { useState } from 'react'
import { Calender, Comment, Like } from '../Common/Icon'
import Comments from '../Secondpage/Comments'
import Post from '../Secondpage/Post'

const Newpost = () => {
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
        <div className='flex  flex-col   justify-center my-20 px-10'>
            <div className='flex items-start justify-center flex-col relative'>

            <span
                className="absolute bg-[#2C49FE]
              w-[120px] top-[30px] md:w-[166px]
              h-[6px] md:h-[8px] z-5">
            </span>


            <span
                className="absolute top-[30px] bg-[#01C8FF]
                w-[140px] md:w-[188px]
              h-[6px] md:h-[8px] z-3">
            </span>

            <h1 className='text-[28px] md:text-[40px] lg:text-[48px] font-bold mt-8'> New Posts</h1>
            </div>
            <div className='flex items-center justify-center  flex-col'>

            <Post />
            <Post />
            <Post />
            </div>

            
        </div>
    )
}

export default Newpost