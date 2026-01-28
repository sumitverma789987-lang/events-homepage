import React from "react";

const Button = ({
    text,bgColor,type,textColor,font,padding,rounded,textSize,hover,}) => {
    return (
        <button
            type={type}
            className={`cursor-pointer w-full ${font} ${bgColor} ${textColor} ${padding} ${rounded} ${textSize} ${hover}`}
        >
            {text}
        </button>
    );
};

export default Button;
