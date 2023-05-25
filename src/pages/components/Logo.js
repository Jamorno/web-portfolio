"use client"

import { motion } from "framer-motion";
import SmoothScroll from "./SmoothScroll";

export default function Logo() {
    return (
        <div>
            <motion.div className="bg-[#ddd9d1] text-6xl font-black rounded-full h-20 w-20 flex justify-center items-center mx-auto cursor-pointer"
                whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <SmoothScroll to="Navbar">O.</SmoothScroll>
            </motion.div>
        </div>
    )
}
