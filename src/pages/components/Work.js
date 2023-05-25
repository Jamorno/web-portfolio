"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { HiRocketLaunch } from "react-icons/hi2";
import Imdb from "/public/Imdb-clone.png"
import sunnyside from "/public/sunnyside.png"
import blogr from "/public/blogr.png"
import Ecommerce from "/public/Ecommerce.png"

export default function Work() {

    const scrollLeft = {
        hide: {
            x: 200,
        },
        show: {
            x: 0,
            transition: {
                duration: 1,
            }
        }
    };

    const scrollRight = {
        hide: {
            x: -200,
        },
        show: {
            x: 0,
            transition: {
                duration: 1,
            }
        }
    };

    // scroll moblie
    const scrollMoblie = {
        hide: {
            y: 200,
        },
        show: {
            y: 0,
            transition: {
                duration: 1,
            }
        }
    };

    return (
        <div id="Work" className="pt-1 px-1 md:pt-1 md:px-1 lg:pt-3 lg:px-3">

            {/* Desktop */}
            <div className="hidden md:inline-block lg:inline-block">
                {/* Project 1 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2">
                    <motion.div variants={scrollLeft} initial="hide" whileInView="show" exit="hide">
                        <Link href="https://imdb-clone-jamorno.vercel.app/">
                            <Image src={Imdb} alt="Imdb-image" className="rounded-l-[75px]" />
                        </Link>
                    </motion.div>

                    <motion.div className="bg-[#1B1B1F] text-[#ddd9d1] rounded-r-[75px] flex flex-col items-center justify-between p-10"
                        variants={scrollRight} initial="hide" whileInView="show" exit="hide">
                        <Link href="https://github.com/Jamorno/IMDb-clone">
                            <motion.div whileHover={{ y: -15 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <BsGithub size={50} className="md:hidden lg:inline-block" />
                                <BsGithub size={30} className="md:inline-block lg:hidden" />
                            </motion.div>
                        </Link>

                        <Link href="https://imdb-clone-jamorno.vercel.app/" className="md:text-2xl lg:text-5xl font-black">Imdb clone</Link>

                        <Link href="https://imdb-clone-jamorno.vercel.app/" className="w-full font-bold flex items-end justify-between md:text-md lg:text-xl lg:px-10">
                            <p>Lauch Project</p>
                            <HiRocketLaunch size={30} className="md:hidden lg:inline-block" />
                            <HiRocketLaunch size={20} className="md:inline-block lg:hidden" />
                        </Link>
                    </motion.div>
                </div>

                {/* Project 2 */}
                <div className="grid md:grid-cols-2 md:pt-1 lg:grid-cols-2 pt-3">
                    <motion.div variants={scrollLeft} initial="hide" whileInView="show" exit="hide">
                        <Link href="https://jamorno.github.io/Sunnyside-agency-landing-page/">
                            <Image src={sunnyside} alt="Imdb-image" className="rounded-l-[75px]" />
                        </Link>
                    </motion.div>

                    <motion.div className="bg-[#1B1B1F] text-[#ddd9d1] rounded-r-[75px] flex flex-col items-center justify-between p-10"
                        variants={scrollRight} initial="hide" whileInView="show" exit="hide">
                        <Link href="https://github.com/Jamorno/Sunnyside-agency-landing-page">
                            <motion.div whileHover={{ y: -15 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <BsGithub size={50} className="md:hidden lg:inline-block" />
                                <BsGithub size={30} className="md:inline-block lg:hidden" />
                            </motion.div>
                        </Link>

                        <Link href="https://jamorno.github.io/Sunnyside-agency-landing-page/" className="md:text-xl md:text-center lg:text-5xl font-black">Sunnyside agency landing page</Link>

                        <Link href="https://jamorno.github.io/Sunnyside-agency-landing-page/" className="w-full font-bold flex items-end justify-between md:text-md lg:text-xl lg:p-10">
                            <p>Lauch Project</p>
                            <HiRocketLaunch size={30} className="md:hidden lg:inline-block" />
                            <HiRocketLaunch size={20} className="md:inline-block lg:hidden" />
                        </Link>
                    </motion.div>
                </div>

                {/* Project 3 */}
                <div className="grid grid-cols-2 pt-3">
                    <motion.div variants={scrollLeft} initial="hide" whileInView="show" exit="hide">
                        <Link href="https://jamorno.github.io/E-commerce-product-page/">
                            <Image src={Ecommerce} alt="Imdb-image" className="rounded-l-[75px]" />
                        </Link>
                    </motion.div>

                    <motion.div className="bg-[#1B1B1F] text-[#ddd9d1] rounded-r-[75px] flex flex-col items-center justify-between p-10"
                        variants={scrollRight} initial="hide" whileInView="show" exit="hide">
                        <Link href="https://github.com/Jamorno/E-commerce-product-page">
                            <motion.div whileHover={{ y: -15 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <BsGithub size={50} className="md:hidden lg:inline-block" />
                                <BsGithub size={30} className="md:inline-block lg:hidden" />
                            </motion.div>
                        </Link>

                        <Link href="https://jamorno.github.io/E-commerce-product-page/" className="md:text-2xl lg:text-5xl font-black">E-commerce product page</Link>

                        <Link href="https://jamorno.github.io/E-commerce-product-page/" className="w-full lg:px-10 flex items-center justify-between md:text-md lg:text-xl font-bold">
                            <p>Lauch Project</p>
                            <HiRocketLaunch size={30} className="md:hidden lg:inline-block" />
                            <HiRocketLaunch size={20} className="md:inline-block lg:hidden" />
                        </Link>
                    </motion.div>
                </div>

                {/* Project 4 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 pt-3">
                    <motion.div variants={scrollLeft} initial="hide" whileInView="show" exit="hide">
                        <Link href="https://jamorno.github.io/Blogr/">
                            <Image src={blogr} alt="blogr-image" className="rounded-l-[75px]" />
                        </Link>
                    </motion.div>

                    <motion.div className="bg-[#1B1B1F] text-[#ddd9d1] rounded-r-[75px] flex flex-col items-center justify-between p-10"
                        variants={scrollRight} initial="hide" whileInView="show" exit="hide">
                        <Link href="https://github.com/Jamorno/Blogr">
                            <motion.div whileHover={{ y: -15 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <BsGithub size={50} className="md:hidden lg:inline-block" />
                                <BsGithub size={30} className="md:inline-block lg:hidden" />
                            </motion.div>
                        </Link>

                        <Link href="https://jamorno.github.io/Blogr/" className="md:text-2xl lg:text-5xl font-black">Blogr</Link>

                        <Link href="https://jamorno.github.io/Blogr/" className="w-full lg:px-10 flex items-center justify-between md:text-md lg:text-xl font-bold">
                            <p>Lauch Project</p>
                            <HiRocketLaunch size={30} className="md:hidden lg:inline-block" />
                            <HiRocketLaunch size={20} className="md:inline-block lg:hidden" />
                        </Link>
                    </motion.div>
                </div>

                {/* Project 5 / 6 */}
                <div className="grid grid-cols-2 md:pt-1 md:gap-1 lg:pt-3 lg:gap-3">
                    <motion.div className="bg-[#feca52] text-[#1B1B1F] rounded-[75px] h-80 flex flex-col items-center justify-center space-y-10"
                        whileHover={{ scale: 1.02 }}>
                        <Link href="hhttps://github.com/Jamorno/Intro-section-with-dropdown-navigation">
                            <motion.div whileHover={{ y: -15 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <BsGithub size={50} />
                            </motion.div>
                        </Link>

                        <Link href="https://intro-section-with-dropdown-navigation-theta-sepia.vercel.app/" className="md:text-center md:text-3xl lg:text-5xl font-black">intro with dropdown navigation</Link>

                        <Link href="https://intro-section-with-dropdown-navigation-theta-sepia.vercel.app/" className="w-full px-10 flex items-center justify-between text-xl font-bold">
                            <p>Lauch Project</p>
                            <HiRocketLaunch size={30} />
                        </Link>
                    </motion.div>

                    <motion.div className="bg-[#ddd9d1] text-[#1B1B1F] rounded-[75px] h-80 flex flex-col items-center justify-center space-y-10"
                        whileHover={{ scale: 1.02 }}>
                        <Link href="https://github.com/Jamorno/Notifications-page">
                            <motion.div whileHover={{ y: -15 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <BsGithub size={50} />
                            </motion.div>
                        </Link>

                        <Link href="https://jamorno.github.io/Notifications-page/" className="md:text-center md:text-3xl lg:text-5xl font-black">Notifications page</Link>

                        <Link href="https://jamorno.github.io/Notifications-page/" className="w-full px-10 flex items-center justify-between text-xl font-bold">
                            <p>Lauch Project</p>
                            <HiRocketLaunch size={30} />
                        </Link>
                    </motion.div>
                </div>

                {/* Project 7 / 8 */}
                <div className="grid grid-cols-2 md:pt-1 md:gap-1 lg:pt-3 lg:gap-3">
                    <motion.div className="bg-[#1B1B1F] text-[#ddd9d1] rounded-[75px] h-80 flex flex-col items-center justify-center space-y-10"
                        whileHover={{ scale: 1.02 }}>
                        <Link href="https://github.com/Jamorno/news-homepage">
                            <motion.div whileHover={{ y: -15 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <BsGithub size={50} />
                            </motion.div>
                        </Link>

                        <Link href="https://jamorno.github.io/news-homepage/" className="md:text-center md:text-3xl lg:text-5xl font-black">News homepage</Link>

                        <Link href="https://jamorno.github.io/news-homepage/" className="w-full px-10 flex items-center justify-between text-xl font-bold">
                            <p>Lauch Project</p>
                            <HiRocketLaunch size={30} />
                        </Link>
                    </motion.div>

                    <motion.div className="bg-[#A5A1FF] text-[#1B1B1F] rounded-[75px] h-80 flex flex-col items-center justify-center space-y-10"
                        whileHover={{ scale: 1.02 }}>
                        <Link href="https://github.com/Jamorno/Advice-generator-app">
                            <motion.div whileHover={{ y: -15 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <BsGithub size={50} />
                            </motion.div>
                        </Link>

                        <Link href="https://jamorno.github.io/Advice-generator-app/" className="md:text-center md:text-3xl lg:text-5xl font-black">Advice generator app</Link>

                        <Link href="https://jamorno.github.io/Advice-generator-app/" className="w-full px-10 flex items-center justify-between text-xl font-bold">
                            <p>Lauch Project</p>
                            <HiRocketLaunch size={30} />
                        </Link>
                    </motion.div>
                </div>
            </div>


            {/* Moblile */}
            <div className="md:hidden lg:hidden">
                {/* Project 1 */}
                <div className="">
                    <motion.div className="bg-[#1B1B1F] text-[#ddd9d1] rounded-[75px] flex flex-col items-center justify-between p-10 space-y-5"
                        variants={scrollMoblie} initial="hide" whileInView="show" exit="hide">
                        <Link href="https://github.com/Jamorno/IMDb-clone">
                            <motion.div whileHover={{ y: -15 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <BsGithub size={40} />
                            </motion.div>
                        </Link>

                        <Link href="https://imdb-clone-jamorno.vercel.app/" className="text-2xl font-black">Imdb clone</Link>

                        <Link href="https://imdb-clone-jamorno.vercel.app/" className="w-full flex items-center justify-between text-md font-bold">
                            <p>Lauch Project</p>
                            <HiRocketLaunch size={30} />
                        </Link>
                    </motion.div>
                </div>

                {/* Project 2 */}
                <div className="pt-1">
                    <motion.div className="bg-[#1B1B1F] text-[#ddd9d1] rounded-[75px] flex flex-col items-center justify-between p-10 space-y-5"
                        variants={scrollMoblie} initial="hide" whileInView="show" exit="hide">
                        <Link href="https://github.com/Jamorno/Sunnyside-agency-landing-page">
                            <motion.div whileHover={{ y: -15 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <BsGithub size={50} />
                            </motion.div>
                        </Link>

                        <Link href="https://jamorno.github.io/Sunnyside-agency-landing-page/" className="text-2xl font-black text-center">Sunnyside agency landing page</Link>

                        <Link href="https://jamorno.github.io/Sunnyside-agency-landing-page/" className="w-full flex items-center justify-between text-md font-bold">
                            <p>Lauch Project</p>
                            <HiRocketLaunch size={30} />
                        </Link>
                    </motion.div>
                </div>

                {/* Project 3 */}
                <div className="pt-1">
                    <motion.div className="bg-[#1B1B1F] text-[#ddd9d1] rounded-[75px] flex flex-col items-center justify-between p-10 space-y-5"
                        variants={scrollMoblie} initial="hide" whileInView="show" exit="hide">
                        <Link href="https://github.com/Jamorno/E-commerce-product-page">
                            <motion.div whileHover={{ y: -15 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <BsGithub size={50} />
                            </motion.div>
                        </Link>

                        <Link href="https://jamorno.github.io/E-commerce-product-page/" className="text-2xl font-black">E-commerce product page</Link>

                        <Link href="https://jamorno.github.io/E-commerce-product-page/" className="w-full flex items-center justify-between text-md font-bold">
                            <p>Lauch Project</p>
                            <HiRocketLaunch size={30} />
                        </Link>
                    </motion.div>
                </div>

                {/* Project 4 */}
                <div className="pt-1">
                    <motion.div className="bg-[#1B1B1F] text-[#ddd9d1] rounded-[75px] flex flex-col items-center justify-between p-10 space-y-5"
                        variants={scrollMoblie} initial="hide" whileInView="show" exit="hide">
                        <Link href="https://github.com/Jamorno/Blogr">
                            <motion.div whileHover={{ y: -15 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <BsGithub size={50} />
                            </motion.div>
                        </Link>

                        <Link href="https://jamorno.github.io/Blogr/" className="text-2xl font-black">Blogr</Link>

                        <Link href="https://jamorno.github.io/Blogr/" className="w-full flex items-center justify-between text-md font-bold">
                            <p>Lauch Project</p>
                            <HiRocketLaunch size={30} />
                        </Link>
                    </motion.div>
                </div>

                {/* Project 5 / 6 */}
                <div className="grid grid-cols-2 pt-1 gap-1">
                    <motion.div className="bg-[#feca52] text-[#1B1B1F] rounded-[75px] h-80 flex flex-col items-center justify-center space-y-10"
                        whileHover={{ scale: 1.02 }}>
                        <Link href="hhttps://github.com/Jamorno/Intro-section-with-dropdown-navigation">
                            <motion.div whileHover={{ y: -15 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <BsGithub size={50} />
                            </motion.div>
                        </Link>

                        <Link href="https://intro-section-with-dropdown-navigation-theta-sepia.vercel.app/" className="text-2xl text-center font-black">intro with dropdown navigation</Link>

                        <Link href="https://intro-section-with-dropdown-navigation-theta-sepia.vercel.app/" className="w-full px-10 flex items-center justify-center">
                            <HiRocketLaunch size={30} />
                        </Link>
                    </motion.div>

                    <motion.div className="bg-[#ddd9d1] text-[#1B1B1F] rounded-[75px] h-80 flex flex-col items-center justify-center space-y-10"
                        whileHover={{ scale: 1.02 }}>
                        <Link href="https://github.com/Jamorno/Notifications-page">
                            <motion.div whileHover={{ y: -15 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <BsGithub size={50} />
                            </motion.div>
                        </Link>

                        <Link href="https://jamorno.github.io/Notifications-page/" className="text-2xl text-center font-black">Notifications page</Link>

                        <Link href="https://jamorno.github.io/Notifications-page/" className="w-full px-10 flex items-center justify-center">
                            <HiRocketLaunch size={30} />
                        </Link>
                    </motion.div>
                </div>

                {/* Project 7 / 8 */}
                <div className="grid grid-cols-2 pt-1 gap-1">
                    <motion.div className="bg-[#1B1B1F] text-[#ddd9d1] rounded-[75px] h-80 flex flex-col items-center justify-center space-y-10"
                        whileHover={{ scale: 1.02 }}>
                        <Link href="https://github.com/Jamorno/news-homepage">
                            <motion.div whileHover={{ y: -15 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <BsGithub size={50} />
                            </motion.div>
                        </Link>

                        <Link href="https://jamorno.github.io/news-homepage/" className="text-2xl text-center font-black">News homepage</Link>

                        <Link href="https://jamorno.github.io/news-homepage/" className="w-full px-10 flex items-center justify-center">
                            <HiRocketLaunch size={30} />
                        </Link>
                    </motion.div>

                    <motion.div className="bg-[#A5A1FF] text-[#1B1B1F] rounded-[75px] h-80 flex flex-col items-center justify-center space-y-10"
                        whileHover={{ scale: 1.02 }}>
                        <Link href="https://github.com/Jamorno/Advice-generator-app">
                            <motion.div whileHover={{ y: -15 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <BsGithub size={50} />
                            </motion.div>
                        </Link>

                        <Link href="https://jamorno.github.io/Advice-generator-app/" className="text-2xl text-center font-black">Advice generator app</Link>

                        <Link href="https://jamorno.github.io/Advice-generator-app/" className="w-full px-10 flex items-center justify-center">
                            <HiRocketLaunch size={30} />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
