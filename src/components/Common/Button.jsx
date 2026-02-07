import React from "react";

const Button = ({text,bgColor,type,textColor,font,padding,rounded,textSize,hover,onClick}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`cursor-pointer ${font} ${bgColor} ${textColor} ${padding} ${rounded} ${textSize} ${hover}`}
        >
            {text}
        </button>
    );
};

export default Button;