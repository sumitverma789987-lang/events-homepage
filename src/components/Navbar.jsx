import React, { useEffect, useState } from "react";
import Button from "./Button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Close menu on desktop resize
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 1200) setIsOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-[9px] p-4  z-50">
                <div className="flex justify-between items-center min-[1440px]:px-60 px-6 mx-auto">

                    <div className="flex items-center gap-2">
                        <img src="./assets/logo1.png" className="scale-80" alt="logo" />
                        <p className="text-4xl font-bold text-[#2c49fe]">
                            Events<span className="text-[#01c8ff]">Free</span>
                        </p>
                    </div>

                    <div className="hidden min-[1200px]:flex items-center gap-8 text-white">
                        {["HOME", "EVENTS", "FEED", "USER NAME"].map((item) => (
                            <a key={item} className="cursor-pointer hover:font-semibold transition">
                                {item}
                            </a>
                        ))}
                        <Button
                            text="Log Out"
                            textColor="text-white"
                            bgColor="bg-[#2C49FE]"
                            padding="px-5 py-2"
                            rounded="rounded-[23px]"
                            font="font-semibold"
                            hover='hover:bg-white hover:scale-105 transition-all duration-200 ease-in-out hover:text-[#2C49FE]' />

                        
                    </div>
                </div>
            </nav>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-6 right-6 flex flex-col gap-1 min-[1200px]:hidden z-[1001]"
            >
                <span className={`w-7 h-[3px] bg-white rounded transition ${isOpen && "rotate-45 translate-y-[7px]"}`} />
                <span className={`w-7 h-[3px] bg-white rounded transition ${isOpen && "opacity-0"}`} />
                <span className={`w-7 h-[3px] bg-white rounded transition ${isOpen && "-rotate-45 -translate-y-[7px]"}`} />
            </button>

            
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    } z-[998]`}
            />

            
            <div
                className={`fixed top-0 right-0 h-screen w-[50%] sm:w-[40%] bg-black text-white
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"} z-[999]`}
            >
                <div className="flex flex-col gap-6 p-8 pt-24">
                    {["HOME", "EVENTS", "FEED", "USER NAME"].map((item) => (
                        <a
                            key={item}
                            onClick={() => setIsOpen(false)}
                            className="text-lg hover:text-[#2C49FE] transition cursor-pointer"
                        >
                            {item}
                        </a>
                    ))}

                    <Button
                        text="Log Out"
                        textColor="text-white"
                        bgColor="bg-[#2C49FE]"
                        padding="px-6 py-2"
                        rounded="rounded-[23px]"
                        font="font-semibold"
                    />
                </div>
            </div>
        </>
    );
};

export default Navbar;
