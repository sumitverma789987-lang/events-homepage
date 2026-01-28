import React from 'react'

const Input = ({ type, name, placeholder, value, onChange, className }) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`border border-gray-300 rounded-md px-4 py-2 outline-none w-full focus:border-black ${className}`}
        />
    );
};
export default Input