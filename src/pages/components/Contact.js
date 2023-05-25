"use client"

import SmoothScroll from "./SmoothScroll";
import { motion } from "framer-motion";
import { BsMailbox2 } from "react-icons/bs";

export default function Contact() {
  return (
    <div id="Contact" className="pt-1 px-1 md:grid md:grid-cols-2 md:pt-1 md:gap-1 lg:grid lg:grid-cols-3 lg:px-3 lg:pt-3 lg:gap-3">
      <div className="bg-[#1B1B1F] text-[#ddd9d1] rounded-[75px] space-y-10 p-10 md:col-span-1 lg:col-span-2 lg:p-14">
        <p className="text-md lg:text-2xl">What I do</p>
        <h1 className="text-4xl font-bold lg:text-8xl lg:font-black">I am dedicated to turning ideas into innovative web applications.</h1>
      </div>

      <SmoothScroll to="SendMessage">
        <motion.div className="bg-[#A5A1FF] text-[#1B1B1F] rounded-[75px] flex items-center justify-center p-5 mt-1 space-x-3 cursor-pointer md:h-full md:col-span-1 lg:flex-col lg:p-0 lg:space-x-0 lg:h-full"
          whileHover={{ scale: 1.03 }}>
          <p className="text-2xl lg:text-4xl font-black">Contact</p>
          <BsMailbox2 size={60} className="hidden lg:inline-block" />
          <BsMailbox2 size={30} className="lg:hidden" />
        </motion.div>
      </SmoothScroll>
    </div>
  )
}
