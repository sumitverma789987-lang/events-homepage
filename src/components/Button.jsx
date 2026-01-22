import React from 'react'

const Button = ({ text, bgColor, textColor, font, padding, rounded, textSize, hover  }) => {
    return (
        <div>
            <button className={`cursor-pointer ${font} ${bgColor} ${textColor} ${padding} ${rounded}  ${textSize} ${hover}`}>{text}</button>
        </div>
    )
}

export default Button