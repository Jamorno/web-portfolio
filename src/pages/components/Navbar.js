"use client"

import Logo from "./Logo"
import { motion } from "framer-motion";
import SmoothScroll from "./SmoothScroll";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";

export default function Navbar() {
    return (
        <div id="Navbar">
            <div className="p-32 lg:p-44">
                <Logo />
            </div>

            {/* Navbar item */}
            <div className="bg-[#ddd9d1] text-6xl font-black rounded-[75px] space-y-10 p-10 mt-12 mx-1 lg:text-8xl lg:p-24 lg:mx-3 lg:mt-24">
                <div className="flex justify-end">
                    <SmoothScroll to="Work">
                        <motion.p className="cursor-pointer" whileHover={{ x: -20 }}>Work</motion.p>
                    </SmoothScroll>
                </div>

                <div className="flex items-center justify-between">
                    <motion.div to="Contact" className="cursor-pointer"
                        whileHover={{ scale: 1.3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <SmoothScroll to="Contact">
                            <TbArrowBigDownLinesFilled size={80} className="hidden lg:inline-block" />
                            <TbArrowBigDownLinesFilled size={50} className="lg:hidden" />
                        </SmoothScroll>
                    </motion.div>

                    <SmoothScroll to="About">
                        <motion.p className="cursor-pointer" whileHover={{ x: -20 }}>About</motion.p>
                    </SmoothScroll>
                </div>
            </div>
        </div>
    )
}
