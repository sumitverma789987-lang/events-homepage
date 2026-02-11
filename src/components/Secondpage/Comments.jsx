import { useState } from "react";
import Button from "../Common/Button";
import { Remove } from "../Common/Icon";

export default function Comments({ commentCount, setCommentCount }) {
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState([
        { text: "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.", user: "Username", avatar: "/assets/Ellipse/Ellipse1.png" },
        { text: "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.", user: "Username", avatar: "/assets/Ellipse/Ellipse2.png" },
        { text: "Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.", user: "Username", avatar: "/assets/Ellipse/Ellipse3.png" },
    ]);

    const addComment = () => {
        if (newComment !== "") {
            const randomNum = Math.floor(Math.random() * 8) + 1;
            const newCommentObj = {
                text: newComment,
                user: "Username",
                avatar: `/assets/Ellipse/Ellipse${randomNum}.png`
            };
            setComments([...comments, newCommentObj]);
            setCommentCount(commentCount + 1);
            setNewComment("");
        }
    };

    const deleteComment = (index) => {
        const newComments = comments.filter((comment, i) => i !== index);
        setComments(newComments);
        setCommentCount(commentCount - 1);
    };

    return (
        <div className="w-full max-w-[1150px]  mx-auto  ">


            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 mb-8 items-stretch sm:items-center">
                <div className="flex flex-col sm:flex-row gap-3 border justify-between border-gray-300 rounded-[20px] sm:rounded-full px-2 py-2 sm:py-2 flex-1">
                    <div className="flex gap-2 items-center flex-1">
                        <img
                            src="/assets/Ellipse/Ellipse4.png"
                            alt="Your avatar"
                            className="w-10 h-10 rounded-full flex-shrink-0"
                        />
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Add a new comment"
                            className="flex-1 outline-none text-sm sm:text-base"
                        />
                    </div>

                    <Button
                        text="Post Comment"
                        textColor="text-white text-sm sm:text-base whitespace-nowrap"
                        bgColor="bg-[#2C49FE]"
                        padding="px-4 py-2 sm:px-6 sm:py-2"
                        rounded="rounded-[23px]"
                        font="font-semibold"
                        onClick={addComment}
                        hover="hover:bg-white hover:scale-105 transition-all duration-500 ease-in-out border border-1-[#2C49FE] hover:text-[#2C49FE]"
                    />
                </div>
            </div>

            <div className="space-y-4">
                {comments.map((comment, index) => (
                    <div key={index} className="flex gap-2 sm:gap-3 items-start">
                        <img
                            src={comment.avatar}
                            alt="User avatar"
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0"
                        />

                        <div className="flex flex-col gap-2 flex-1 min-w-0">
                            <div className="bg-[#F1F2F5] rounded-b-[20px] rounded-r-[20px] p-3 sm:p-4 w-full">
                                <div className="font-semibold text-gray-800 text-sm sm:text-base">{comment.user}</div>
                                <p className="text-black opacity-60 mt-1 break-all text-sm sm:text-base">{comment.text}</p>
                            </div>

                            <div className="flex items-center gap-1 cursor-pointer" onClick={() => deleteComment(index)}>
                                <Remove />
                                <span className="text-black text-xs sm:text-sm hover:text-red-600 transition-colors">
                                    Remove Comment
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}