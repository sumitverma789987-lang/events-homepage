import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link } from "react-router";

const Navbar = ({
    bgColor = "bg-black/40",
    textColor = "text-white",
    scrolledTextColor = "text-black"
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 1200) setIsOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Scroll listener
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Determine current text color based on scroll state
    const currentTextColor = scrolled ? scrolledTextColor : textColor;

    const NavLinks = ({ mobile = false }) => (
        <>
            <Link
                to="/"
                onClick={mobile ? () => setIsOpen(false) : undefined}
                className={`${mobile ? "text-[16px] text-white" : currentTextColor} hover:text-[#2C49FE] transition cursor-pointer`}
            >
                HOME
            </Link>

            <Link
                to="/events"
                onClick={mobile ? () => setIsOpen(false) : undefined}
                className={`${mobile ? "text-[16px] text-white" : currentTextColor} hover:text-[#2C49FE] transition cursor-pointer`}
            >
                EVENTS
            </Link>

            <Link
                to="/feed"
                onClick={mobile ? () => setIsOpen(false) : undefined}
                className={`${mobile ? "text-[16px] text-white" : currentTextColor} hover:text-[#2C49FE] transition cursor-pointer`}
            >
                FEED
            </Link>

            <Link
                to="/username"
                onClick={mobile ? () => setIsOpen(false) : undefined}
                className={`${mobile ? "text-[16px] text-white" : currentTextColor} hover:text-[#2C49FE] transition cursor-pointer`}
            >
                USERNAME
            </Link>

            <Button
                text="Log Out"
                textColor="text-white"
                bgColor="bg-[#2C49FE]"
                padding={mobile ? "px-6 py-2" : "px-5 py-2"}
                rounded="rounded-[23px]"
                font="font-semibold"
                hover="hover:bg-white hover:scale-105 transition-all duration-500 ease-in-out hover:text-[#2C49FE]"
            />
        </>
    );

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full p-4 z-50 transition-all duration-300 ${scrolled ? `${bgColor} backdrop-blur-[9px]` : 'bg-transparent'}`}>
                <div className="flex justify-between items-center min-[1440px]:px-60 min-[500px]:px-6 px-0 mx-auto">

                    <div className="flex items-center gap-2 sm:scale-100 scale-70">
                        <img src="/Assets/Logo1.png" className="scale-80" alt="logo" />
                        <p className="text-4xl font-bold text-[#2c49fe]">
                            Events<span className="text-[#01c8ff]">Free</span>
                        </p>
                    </div>


                    <div className="hidden min-[1200px]:flex items-center gap-8">
                        <NavLinks />
                    </div>
                </div>
            </nav>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-6 right-6 flex flex-col gap-1 mt-5 mr-3 min-[1200px]:hidden z-[1001]"
            >
                <span className={`w-7 h-[3px] ${currentTextColor} rounded transition-all ${isOpen && "rotate-45 translate-y-[7px]"}`} />
                <span className={`w-7 h-[3px] ${currentTextColor} rounded transition-all ${isOpen && "opacity-0"}`} />
                <span className={`w-7 h-[3px] ${currentTextColor} rounded transition-all ${isOpen && "-rotate-45 -translate-y-[7px]"}`} />
            </button>

            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    } z-[998] min-[1200px]:hidden`}
            />

            <div
                className={`fixed top-0 right-0 h-dvh w-[50%] sm:w-[40%] bg-black text-white
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"} z-[999] min-[1200px]:hidden overflow-y-auto`}
            >
                <div className="flex flex-col gap-6 p-8 pt-24">
                    <NavLinks mobile={true} />
                </div>
            </div>
        </>
    );
};

export default Navbar;