"use client"

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {

    const Skills = ({ name, x, y }) => {
        return (
            <motion.div className="font-bold cursor-pointer absolute bottom-60"
                whileHover={{ scale: 1.5 }} initial={{ x: 0, y: 0 }} animate={{ x: x, y: y }} transition={{ duration: 1 }}>
                {name}
            </motion.div>
        )
    }

    return (
        <div id="About" className="pt-1 mx-1 lg:px-3 lg:pt-3">
            <div className="bg-[#1B1B1F] rounded-[75px] p-14 relative">

                <div className="grid md:grid-cols-2 lg:grid-cols-2">
                    <div className="text-[#feca52] lg:text-5xl font-bold text-2xl">
                        <p className="text-[#ddd9d1] md:text-lg lg:text-xl font-bold pb-5">Who am I</p>
                        My name is <motion.span className="text-[#ddd9d1]">Jamorn Suttipong.</motion.span> I am dedicated to turning ideas into innovative web applications.
                        Explore my latest projects and showcasing my expertise in Next.js and web development.
                    </div>
                </div>

                {/* skill md / lg */}
                <div className="hidden md:inline md:text-xl lg:inline lg:text-3xl">
                    {/* lg */}
                    <div className="text-[#feca52] md:hidden lg:flex items-center justify-end pr-80 pt-36 pb-64">
                        <Skills name="Skills" x="0vw" y="-7vw" />
                    </div>

                    {/* md */}
                    <div className="text-[#feca52] md:flex lg:hidden items-center justify-end pr-80 pt-48 pb-44">
                        <Skills name="Skills" x="19vw" y="-7vw" />
                    </div>

                    <div className="text-[#ddd9d1] flex items-center justify-end pt-10">
                        <Skills name="HTML" x="-33vw" y="-21vw" />
                        <Skills name="CSS" x="-28vw" y="-15vw" />
                        <Skills name="Javascript" x="-7vw" y="-16vw" />
                        <Skills name="Bootstrap" x="-39vw" y="-10vw" />
                        <Skills name="Tailwild CSS" x="-31vw" y="2vw" />
                        <Skills name="NextJs" x="-17vw" y="-25vw" />
                        <Skills name="Figma" x="-5vw" y="-4vw" />
                        <Skills name="Web Design" x="-12vw" y="5vw" />
                    </div>
                </div>

                {/* skill moblie */}
                <div className="md:hidden lg:hidden text-lg">
                    <div className="text-[#feca52] flex items-center justify-end pt-48 pb-64">
                        <Skills name="Skills" x="-57vw" y="-72vw" />
                    </div>

                    <div className="text-[#ddd9d1] flex items-center justify-end pt-10">
                        <Skills name="HTML" x="2vw" y="-72vw" />
                        <Skills name="CSS" x="2vw" y="-58vw" />
                        <Skills name="Javascript" x="2vw" y="-44vw" />
                        <Skills name="Bootstrap" x="2vw" y="-29vw" />
                        <Skills name="Tailwild CSS" x="2vw" y="-14vw" />
                        <Skills name="NextJs" x="2vw" y="-1vw" />
                        <Skills name="Figma" x="2vw" y="14vw" />
                        <Skills name="Web Design" x="2vw" y="28vw" />
                    </div>
                </div>

                <Link href="https://drive.google.com/file/d/1VX8hbRRAZ4wckVbrsA7M0VKdWT_VQpZ_/view?usp=share_link">
                    <p className="lg:text-6xl text-4xl text-[#feca52] font-black cursor-pointer">Resume</p>
                </Link>
            </div>
        </div>
    )
}
