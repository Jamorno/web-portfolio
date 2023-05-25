"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./Logo"
import { BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function Fotter() {
  return (
    <div className="p-20 lg:p-24">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-10">
        <Logo />

        <p className="text-[#ddd9d1] text-xl">Jamorn Suttipong</p>

        <div className="flex items-center text-[#ddd9d1] space-x-10">
          <motion.div whileHover={{ scale: 1.5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Link href="https://github.com/Jamorno?tab=repositories">
              <BsGithub size={50} className="cursor-pointer" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Link href="https://www.instagram.com/jamorno/?hl=en">
              <AiFillInstagram size={60} className="cursor-pointer" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
